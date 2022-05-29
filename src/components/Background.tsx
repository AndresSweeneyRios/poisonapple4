import React, { useEffect } from 'react'
import SimplexNoise from 'simplex-noise'
import "./Background.css"

const simplex = new SimplexNoise(Math.random)

const WIDTH = 480
const HEIGHT = 480

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
  uniform float u_wavelength;

  varying highp vec2 v_texcoord;

  vec4 getPixel(vec2 position) {
    return texture2D(u_sampler, position);
  }

  int getNeighbors(vec2 position) {
    float neighbors = 0.0;

    float onx = 1.0 / u_resolution.x;
    float ony = 1.0 / u_resolution.y;

    neighbors += getPixel(vec2(position.x + onx, position.y - ony)).a;
    neighbors += getPixel(vec2(position.x + 0.0, position.y - ony)).a;
    neighbors += getPixel(vec2(position.x + onx, position.y + 0.0)).a;
    neighbors += getPixel(vec2(position.x + onx, position.y + ony)).a;
    neighbors += getPixel(vec2(position.x + 0.0, position.y + ony)).a;
    neighbors += getPixel(vec2(position.x - onx, position.y + ony)).a;
    neighbors += getPixel(vec2(position.x - onx, position.y + 0.0)).a;
    neighbors += getPixel(vec2(position.x - onx, position.y - ony)).a;

    return int(neighbors);
  }

  void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;

    vec4 cell = getPixel(st.xy);

    float onx = 1.0 / u_resolution.x;
    float ony = 1.0 / u_resolution.y;

    int neighbors = getNeighbors(st.xy);
    int neighborNeighbors = getNeighbors(st.xy * 0.5);

    float wasDead = float(cell.a == 0.8);
    float wasAlive = float(cell.a == 1.0);
    float isAlive = float(
      (cell.a == 1.0 && (neighbors == 2 || (neighbors > 3 && neighbors < 8 && neighborNeighbors < 4))) || 
      (cell.a == 0.0 && neighbors == 3) ||
      (cell.a == 0.8 && neighbors == 4)
      // (
      //   int(cell.a) + 
      //   getNeighbors(st.xy + vec2(-onx * 12.0, ony * 12.0)) +
      //   getNeighbors(st.xy + vec2(onx * 12.0, -ony * 12.0)) +
      //   getNeighbors(st.xy + vec2(-onx * 12.0, -ony * 12.0)) +
      //   getNeighbors(st.xy + vec2(onx * 12.0, ony * 12.0)) == 0
      // )
    );
    
    gl_FragColor = vec4(
      (isAlive * 0.4) + ((wasAlive + wasDead) * 0.3), 
      (isAlive * 0.6) + ((wasAlive + wasDead) * 0.1), 
      isAlive + (wasDead * 1.5), 
      isAlive + (wasAlive * 0.8) + (wasDead * 0.5)
    );
  }
`

const postprocessingFragmentShader = /*glsl*/`
  precision mediump float;
  uniform mediump vec2 u_resolution;
  uniform sampler2D u_sampler;
  uniform float u_wavelength;

  varying highp vec2 v_texcoord;

  vec4 getPixel(vec2 position) {
    return texture2D(u_sampler, position);
  }

  void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;

    gl_FragColor = getPixel(st.xy);
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

const generateTexture = () => {
  let i = 0

  const zoomX = (Math.random() * 190) + 10
  const zoomY = (Math.random() * 190) + 10

  const noiseLevel = Math.random() * 70

  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      const pixel = simplex.noise2D(
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
  gl.canvas.height = gl.canvas.width

  const program = createProgram(
    gl,
    createShader(gl, gl.VERTEX_SHADER, vertexShader)!,
    createShader(gl, gl.FRAGMENT_SHADER, fragmentShader)!,
  )

  if (program == undefined) {
    console.error("Failed to create program")

    return
  }

  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)
  gl.useProgram(program)

  const positionAttributeLocation = gl.getAttribLocation(program, "a_position")
  const resolutionUniformLocation = gl.getUniformLocation(program, "u_resolution")

  gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height)

  {
    const positionBuffer = gl.createBuffer()

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
    gl.enableVertexAttribArray(positionAttributeLocation)
  }

  const texture = gl.createTexture()

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
    source,
  )

  {
    const size = 2
    const type = gl.FLOAT
    const normalize = false
    const stride = 0
    const offset = 0

    gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset)
  }

  gl.clearColor(0, 0, 0, 0)
  gl.clear(gl.COLOR_BUFFER_BIT)

  const render = (skipRerender = false) => {
    gl.drawArrays(gl.TRIANGLES, 0, 6)

    gl.flush()

    gl.readPixels(0, 0, WIDTH, HEIGHT, gl.RGBA, gl.UNSIGNED_BYTE, source)

    gl.texImage2D(
      gl.TEXTURE_2D, 
      0, 
      gl.RGBA, 
      gl.canvas.width, 
      gl.canvas.height, 
      0, 
      gl.RGBA, 
      gl.UNSIGNED_BYTE,
      new Uint8Array(source),
    )
    
    // setTimeout(render, 1000 / 30)

    if (!skipRerender) {
      requestAnimationFrame(() => render());
    }
  }

  render()

  // prewarm
  render(true)
  render(true)

  setInterval(() => {
    generateTexture()

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
  
    // prewarm
    render(true)
    render(true)
  }, 30000)
}

// const canvas = document.createElement('canvas')
// document.body.appendChild(canvas)
// const gl = canvas.getContext('webgl')!

export const Background: React.FC = () => {
  const canvas = React.useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvas.current == undefined) {
      return
    }

    const mainContext = canvas.current.getContext('webgl')!

    init(mainContext)
  }, [canvas])
  
  return (
    <div id="background">
      <canvas ref={canvas} />
    </div>
  )
}
