import sharp from 'sharp'

const apple = 'src/assets/lowpoly_apple_transparent.webp'
await sharp(apple).resize(96, 96, { fit: 'contain', background: '#0b0705' }).png().toFile('public/favicon-96.png')
await sharp(apple).resize(180, 180, { fit: 'contain', background: '#0b0705' }).png().toFile('public/apple-touch-icon.png')
const image = async path => `data:image/png;base64,${(await sharp(path).resize({ width: 700, withoutEnlargement: true }).png().toBuffer()).toString('base64')}`
const [mark, pool, health] = await Promise.all([
  image(apple), image('src/assets/screenshots/8ball-in-game.png'), image('src/assets/screenshots/health-members-2026.png'),
])
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<defs><radialGradient id="bg"><stop stop-color="#30203b"/><stop offset="1" stop-color="#0b0705"/></radialGradient></defs>
<rect width="1200" height="630" fill="url(#bg)"/>
<rect x="28" y="28" width="1144" height="574" rx="22" fill="none" stroke="#cdaaff" stroke-opacity=".3"/>
<image href="${mark}" x="58" y="55" width="70" height="70"/>
<g font-family="DejaVu Sans, Arial, sans-serif">
<text x="145" y="96" fill="#cdaaff" font-size="25">poisonapple.dev</text>
<text x="65" y="208" fill="#fff" font-size="53" font-weight="bold">Andres</text>
<text x="65" y="275" fill="#fff" font-size="53" font-weight="bold">Sweeney-Rios</text>
<text x="65" y="351" fill="#cdaaff" font-size="34">Interactive web.</text>
<text x="65" y="399" fill="#cdaaff" font-size="34">Games. Real-time graphics.</text>
<text x="65" y="484" fill="#d0c9d4" font-size="23">TypeScript · React · Three.js · WebGPU</text>
<text x="65" y="547" fill="#a79aaa" font-size="21">Software engineering portfolio</text>
<rect x="747" y="73" width="388" height="215" rx="12" fill="#0b0705" stroke="#cdaaff" stroke-opacity=".35"/>
<image href="${pool}" x="757" y="83" width="368" height="185" preserveAspectRatio="xMidYMid meet"/>
<text x="760" y="316" fill="#d0c9d4" font-size="18">8-ball pool · custom simulation</text>
<rect x="747" y="345" width="388" height="198" rx="12" fill="#0b0705" stroke="#cdaaff" stroke-opacity=".35"/>
<image href="${health}" x="757" y="355" width="368" height="178" preserveAspectRatio="xMidYMid meet"/>
<text x="760" y="573" fill="#d0c9d4" font-size="18">HEALTH+ · membership platform</text>
</g></svg>`
await sharp(Buffer.from(svg)).png().toFile('public/social-preview.png')
console.log('Generated social preview and square brand icons')
