import sharp from 'sharp'
import { site } from './metadata.mjs'

// Preserve the original artwork. Keep the previous URL compatible too.
const original = sharp('public/thumbnail.jpeg')
const { width, height, format } = await original.metadata()
if (width !== site.imageWidth || height !== site.imageHeight || `image/${format}` !== site.imageType) {
  throw new Error('Original thumbnail dimensions/type do not match metadata')
}
await original.png().toFile('public/social-preview.png')
console.log('Original cat-stack thumbnail preserved; legacy social-preview URL updated')
