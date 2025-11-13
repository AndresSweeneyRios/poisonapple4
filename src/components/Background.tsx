import React, { useEffect, useRef } from 'react'
import acid1TextureSrc from '../assets/background/ACID1.webp'
import acid2TextureSrc from '../assets/background/smpte.png'
import "./Background.css"

const vertexShaderSource = /* glsl */ `
  attribute vec2 aPosition;
  void main() {
    gl_Position = vec4(aPosition, 0.0, 1.0);
  }
`

const fragmentShaderSource = /* glsl */ `
#ifdef GL_ES
precision highp float;
#endif

uniform float uTime;
uniform vec2 uResolution;
uniform sampler2D acid1Texture;
uniform sampler2D acid2Texture;

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution.xy;
  float aspect = uResolution.x / uResolution.y;
  vec2 centeredUv = vec2((uv.x - 0.5) * aspect + 0.5, uv.y + 0.5);

  float t0 = uTime * 0.002;
  float t1 = uTime * 0.0005;
  float negT0 = -t0;

  vec2 acid3Uv = (centeredUv + vec2(t0, t1)) / 2.0;
  vec4 acid3 = texture2D(acid1Texture, acid3Uv);

  vec2 acid1bUv = vec2(
    1.0 - (centeredUv.x + negT0) / 4.0,
    (centeredUv.y + acid3.r * 0.1 + negT0) / 4.0
  );
  vec4 acid1b = texture2D(acid1Texture, acid1bUv);

  vec2 acid2Uv = vec2(
    uv.x + acid1b.r * 0.3,
    1.0 - centeredUv.y / 1.77
  );
  vec4 acid2 = texture2D(acid2Texture, acid2Uv);

  gl_FragColor = acid2;
}
`

const loadImage = (src: string) =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image()
    image.crossOrigin = "anonymous"
    image.onload = () => resolve(image)
    image.onerror = () => reject(new Error(`Failed to load texture: ${src}`))
    image.src = src
  })

const compileShader = (gl: WebGL2RenderingContext, type: number, source: string) => {
  const shader = gl.createShader(type)

  if (!shader) {
    console.error("Failed to create shader")
    return null
  }

  gl.shaderSource(shader, source)
  gl.compileShader(shader)

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error("Shader compile error:", gl.getShaderInfoLog(shader))
    gl.deleteShader(shader)
    return null
  }

  return shader
}

const initNeonFractal = async (canvas: HTMLCanvasElement) => {
  const gl = canvas.getContext("webgl2")

  if (!gl) {
    console.error("WebGL2 not supported")
    return
  }

  // Match the canvas resolution to its parent to keep the shader crisp.
  const resize = () => {
    const parent = canvas.parentElement
    const width = parent?.clientWidth ?? window.innerWidth
    const height = parent?.clientHeight ?? window.innerHeight

    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width
      canvas.height = height
      gl.viewport(0, 0, width, height)
    }
  }

  window.addEventListener("resize", resize)
  resize()

  const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
  const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)

  if (!vertexShader || !fragmentShader) {
    window.removeEventListener("resize", resize)
    return
  }

  const program = gl.createProgram()

  if (!program) {
    console.error("Failed to create shader program")
    window.removeEventListener("resize", resize)
    gl.deleteShader(vertexShader)
    gl.deleteShader(fragmentShader)
    return
  }

  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  gl.linkProgram(program)

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error("Program link error:", gl.getProgramInfoLog(program))
    gl.deleteProgram(program)
    window.removeEventListener("resize", resize)
    gl.deleteShader(vertexShader)
    gl.deleteShader(fragmentShader)
    return
  }

  gl.useProgram(program)

  const vertices = new Float32Array([
    -1.0, -1.0,
     1.0, -1.0,
    -1.0,  1.0,
    -1.0,  1.0,
     1.0, -1.0,
     1.0,  1.0,
  ])

  const vertexBuffer = gl.createBuffer()
  if (!vertexBuffer) {
    console.error("Failed to create vertex buffer")
    window.removeEventListener("resize", resize)
    gl.deleteProgram(program)
    gl.deleteShader(vertexShader)
    gl.deleteShader(fragmentShader)
    return
  }

  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)

  const aPositionLocation = gl.getAttribLocation(program, "aPosition")

  if (aPositionLocation < 0) {
    console.error("Failed to get aPosition attribute location")
    window.removeEventListener("resize", resize)
    gl.deleteBuffer(vertexBuffer)
    gl.deleteProgram(program)
    gl.deleteShader(vertexShader)
    gl.deleteShader(fragmentShader)
    return
  }

  gl.enableVertexAttribArray(aPositionLocation)
  gl.vertexAttribPointer(aPositionLocation, 2, gl.FLOAT, false, 0, 0)

  const uTimeLocation = gl.getUniformLocation(program, "uTime")
  const uResolutionLocation = gl.getUniformLocation(program, "uResolution")
  const acid1TextureLocation = gl.getUniformLocation(program, "acid1Texture")
  const acid2TextureLocation = gl.getUniformLocation(program, "acid2Texture")

  if (!uResolutionLocation || !acid1TextureLocation || !acid2TextureLocation) {
    console.error("Failed to locate required uniforms")
    window.removeEventListener("resize", resize)
    gl.deleteBuffer(vertexBuffer)
    gl.deleteProgram(program)
    gl.deleteShader(vertexShader)
    gl.deleteShader(fragmentShader)
    return
  }

  gl.uniform2f(uResolutionLocation, canvas.width, canvas.height)

  let acid1Texture: WebGLTexture | null = null
  let acid2Texture: WebGLTexture | null = null

  let acid1Image: HTMLImageElement
  let acid2Image: HTMLImageElement

  try {
    ;[acid1Image, acid2Image] = await Promise.all([
      loadImage(acid1TextureSrc),
      loadImage(acid2TextureSrc),
    ])
  } catch (error) {
    console.error("Failed to load background textures", error)
    window.removeEventListener("resize", resize)
    gl.deleteBuffer(vertexBuffer)
    gl.deleteProgram(program)
    gl.deleteShader(vertexShader)
    gl.deleteShader(fragmentShader)
    return
  }

  acid1Texture = gl.createTexture()
  acid2Texture = gl.createTexture()

  if (!acid1Texture || !acid2Texture) {
    console.error("Failed to create textures")
    window.removeEventListener("resize", resize)
    gl.deleteBuffer(vertexBuffer)
    gl.deleteProgram(program)
    gl.deleteShader(vertexShader)
    gl.deleteShader(fragmentShader)
    return
  }

  gl.activeTexture(gl.TEXTURE0)
  gl.bindTexture(gl.TEXTURE_2D, acid1Texture)
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, acid1Image)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT)
  gl.generateMipmap(gl.TEXTURE_2D)
  gl.uniform1i(acid1TextureLocation, 0)

  gl.activeTexture(gl.TEXTURE1)
  gl.bindTexture(gl.TEXTURE_2D, acid2Texture)
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, acid2Image)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT)
  gl.generateMipmap(gl.TEXTURE_2D)
  gl.uniform1i(acid2TextureLocation, 1)

  let animationFrameId = 0
  const startTime = performance.now()

  const render = (timestamp: number) => {
    const elapsed = (timestamp - startTime) / 100.0

    if (uTimeLocation) {
      gl.uniform1f(uTimeLocation, elapsed)
    }

    gl.uniform2f(uResolutionLocation, canvas.width, canvas.height)

    gl.drawArrays(gl.TRIANGLES, 0, 6)
    animationFrameId = requestAnimationFrame(render)
  }

  animationFrameId = requestAnimationFrame(render)

  return () => {
    cancelAnimationFrame(animationFrameId)
    window.removeEventListener("resize", resize)

    gl.bindTexture(gl.TEXTURE_2D, null)
    if (acid1Texture) {
      gl.deleteTexture(acid1Texture)
    }
    if (acid2Texture) {
      gl.deleteTexture(acid2Texture)
    }
    gl.deleteBuffer(vertexBuffer)
    gl.deleteProgram(program)
    gl.deleteShader(vertexShader)
    gl.deleteShader(fragmentShader)
  }
}

export const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) {
      return
    }

    let disposed = false
    let cleanup: (() => void) | void

    const run = async () => {
      cleanup = await initNeonFractal(canvas)

      if (disposed && typeof cleanup === "function") {
        cleanup()
      }
    }

    run().catch((error) => {
      console.error("Failed to initialise background shader", error)
    })

    return () => {
      disposed = true
      if (typeof cleanup === "function") {
        cleanup()
      }
    }
  }, [])

  return (
    <div id="background">
      <canvas ref={canvasRef} />
    </div>
  )
}
