import React, { useEffect } from 'react'
import { createNoise2D as SimplexNoise } from 'simplex-noise'
import "./Background.css"

const simplex = SimplexNoise(Math.random)

const WIDTH = 240
const HEIGHT = WIDTH / (window.innerWidth / window.innerHeight)

const vertexShader = /*glsl*/`
  precision mediump float;
  attribute mediump vec2 a_position;
  uniform mediump vec2 u_resolution;
  attribute vec2 a_texcoord;

  varying highp vec2 v_texcoord;

  void main() {
    vec2 zeroToOne = a_position / u_resolution;
    vec2 zeroToTwo = zeroToOne * 2.0;
    vec2 clipSpace = zeroToTwo - 1.0;

    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
    v_texcoord = a_texcoord;
  }
`

const fragmentShader = /*glsl*/`
  precision mediump float;
  uniform mediump vec2 u_resolution;
  uniform sampler2D u_sampler;
  uniform bool u_displayPass;

  varying highp vec2 v_texcoord;

  float getNeighbors(vec2 position, vec2 texel) {
    float neighbors = 0.0;

    neighbors += texture2D(u_sampler, position + vec2( texel.x, -texel.y)).a;
    neighbors += texture2D(u_sampler, position + vec2( 0.0,     -texel.y)).a;
    neighbors += texture2D(u_sampler, position + vec2( texel.x,  0.0)).a;
    neighbors += texture2D(u_sampler, position + vec2( texel.x,  texel.y)).a;
    neighbors += texture2D(u_sampler, position + vec2( 0.0,      texel.y)).a;
    neighbors += texture2D(u_sampler, position + vec2(-texel.x,  texel.y)).a;
    neighbors += texture2D(u_sampler, position + vec2(-texel.x,  0.0)).a;
    neighbors += texture2D(u_sampler, position + vec2(-texel.x, -texel.y)).a;

    return floor(neighbors);
  }

  void main() {
    vec2 texel = vec2(1.0) / u_resolution;
    vec2 st = gl_FragCoord.xy * texel;

    vec4 cell = texture2D(u_sampler, st);

    if (u_displayPass) {
      gl_FragColor = cell;
      return;
    }

    float neighbors = getNeighbors(st, texel);
    float neighborNeighbors = getNeighbors(st * 0.5, texel);

    float wasDead = float(cell.a == 0.8);
    float wasAlive = float(cell.a == 1.0);
    float isAlive = float(
      (cell.a == 1.0 && (neighbors == 2.0 || (neighbors > 3.0 && neighbors < 8.0 && neighborNeighbors < 4.0))) ||
      (cell.a == 0.0 && neighbors == 3.0) ||
      (cell.a == 0.8 && neighbors == 4.0)
    );

    float persistence = wasAlive + wasDead;

    gl_FragColor = vec4(
      (isAlive * 0.4) + (persistence * 0.3),
      (isAlive * 0.6) + (persistence * 0.1),
      isAlive + (wasDead * 1.5),
      isAlive + (wasAlive * 0.8) + (wasDead * 0.5)
    );
  }
`

const createShader = (gl: WebGLRenderingContext, type: number, source: string) => {
  const shader = gl.createShader(type)!

  gl.shaderSource(shader, source)
  gl.compileShader(shader)

  const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS)

  if (success) return shader

  console.error(gl.getShaderInfoLog(shader))
  gl.deleteShader(shader)
}

const createProgram = (gl: WebGLRenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader) => {
  const program = gl.createProgram()!

  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  gl.linkProgram(program)

  const success = gl.getProgramParameter(program, gl.LINK_STATUS)

  if (success) return program

  console.log(gl.getProgramInfoLog(program))
  gl.deleteProgram(program)
}

const source = new Uint8Array(WIDTH * HEIGHT * 4)

const createTexture2D = (gl: WebGLRenderingContext, data?: ArrayBufferView | null) => {
  const texture = gl.createTexture()!

  gl.bindTexture(gl.TEXTURE_2D, texture)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)

  gl.texImage2D(
    gl.TEXTURE_2D,
    0,
    gl.RGBA,
    WIDTH,
    HEIGHT,
    0,
    gl.RGBA,
    gl.UNSIGNED_BYTE,
    data ?? null,
  )

  return texture
}

const generateTexture = () => {
  let i = 0

  const zoomX = (Math.random() * 190) + 10
  const zoomY = (Math.random() * 190) + 10

  const noiseLevel = Math.random() * 70

  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      const pixel = simplex(
        (x + ((Math.random() - 0.5) * noiseLevel)) / zoomX, 
        (y + ((Math.random() - 0.5) * noiseLevel)) / zoomY,
      )
      // const pixel = simplex.noise2D(
      //   x / 40, 
      //   y / 40,
      // )

      const value = ((pixel + 1) / 2) < 0.3 ? 255 : 0

      source[i] = 255
      source[i + 1] = 255
      source[i + 2] = 255
      source[i + 3] = value

      i += 4
    }
  }
}

generateTexture()

const init = (gl: WebGLRenderingContext) => {
  gl.canvas.width = WIDTH
  gl.canvas.height = HEIGHT

  const program = createProgram(
    gl,
    createShader(gl, gl.VERTEX_SHADER, vertexShader)!,
    createShader(gl, gl.FRAGMENT_SHADER, fragmentShader)!,
  )

  if (program == undefined) {
    console.error("Failed to create shader program")

    return
  }

  const positionBuffer = gl.createBuffer()

  if (!positionBuffer) {
    console.error("Failed to create position buffer")

    return
  }

  const positions = [
    0, 0,
    gl.canvas.width, 0,
    0, gl.canvas.height,
    0, gl.canvas.height,
    gl.canvas.width, 0,
    gl.canvas.width, gl.canvas.height,
  ]

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW)

  const positionLocation = gl.getAttribLocation(program, "a_position")

  const bindPositionAttribute = () => {
    if (positionLocation < 0) {
      return
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    gl.enableVertexAttribArray(positionLocation)
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)
  }

  gl.useProgram(program)

  const resolutionLocation = gl.getUniformLocation(program, "u_resolution")
  const samplerLocation = gl.getUniformLocation(program, "u_sampler")
  const displayPassLocation = gl.getUniformLocation(program, "u_displayPass")

  if (resolutionLocation) {
    gl.uniform2f(resolutionLocation, WIDTH, HEIGHT)
  }
  if (samplerLocation) {
    gl.uniform1i(samplerLocation, 0)
  }

  gl.activeTexture(gl.TEXTURE0)

  const textures = [
    createTexture2D(gl, source),
    createTexture2D(gl, source),
  ]

  const framebuffer = gl.createFramebuffer()

  if (!framebuffer) {
    console.error("Failed to create framebuffer")

    return
  }

  let readIndex = 0
  let writeIndex = 1
  let animationFrameId = 0

  const renderFrame = () => {
    gl.useProgram(program)
    bindPositionAttribute()

    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer)
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, textures[writeIndex], 0)
    gl.viewport(0, 0, WIDTH, HEIGHT)
    if (displayPassLocation) {
      gl.uniform1i(displayPassLocation, 0)
    }
    if (resolutionLocation) {
      gl.uniform2f(resolutionLocation, WIDTH, HEIGHT)
    }
    gl.bindTexture(gl.TEXTURE_2D, textures[readIndex])
    gl.drawArrays(gl.TRIANGLES, 0, 6)

    const newReadIndex = writeIndex
    writeIndex = readIndex
    readIndex = newReadIndex

    gl.bindFramebuffer(gl.FRAMEBUFFER, null)
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)
    if (displayPassLocation) {
      gl.uniform1i(displayPassLocation, 1)
    }
    if (resolutionLocation) {
      gl.uniform2f(resolutionLocation, WIDTH, HEIGHT)
    }
    gl.bindTexture(gl.TEXTURE_2D, textures[readIndex])
    gl.drawArrays(gl.TRIANGLES, 0, 6)

    animationFrameId = requestAnimationFrame(renderFrame)
  }

  renderFrame()

  const resetIntervalId = window.setInterval(() => {
    generateTexture()

    gl.activeTexture(gl.TEXTURE0)

    textures.forEach((texture) => {
      gl.bindTexture(gl.TEXTURE_2D, texture)
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA,
        WIDTH,
        HEIGHT,
        0,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        source,
      )
    })
  }, 30000)

  return () => {
    cancelAnimationFrame(animationFrameId)
    window.clearInterval(resetIntervalId)

    gl.bindFramebuffer(gl.FRAMEBUFFER, null)

    textures.forEach((texture) => {
      gl.deleteTexture(texture)
    })

    gl.deleteFramebuffer(framebuffer)
    gl.deleteBuffer(positionBuffer)
    gl.deleteProgram(program)
  }
}

// const canvas = document.createElement('canvas')
// document.body.appendChild(canvas)
// const gl = canvas.getContext('webgl')!

export const Background: React.FC = () => {
  const canvas = React.useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvasElement = canvas.current

    if (canvasElement == undefined) {
      return
    }

    const mainContext = canvasElement.getContext('webgl')

    if (mainContext == undefined) {
      return
    }

    const dispose = init(mainContext)

    return () => {
      dispose?.()
    }
  }, [])
  
  return (
    <div id="background">
      <canvas ref={canvas} />
    </div>
  )
}
