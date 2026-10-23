import { build } from 'vite'
import { readFile, writeFile, rm, cp, readdir } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'
import { site } from './metadata.mjs'

// Netlify and other static hosts can keep using npm run build and dist/.
await build()
try {
  await build({
    build: {
      ssr: 'src/entry-server.tsx',
      outDir: '.ssg',
      emitAssets: true,
      rollupOptions: { output: { entryFileNames: 'entry-server.mjs' } },
    },
  })
  const { render } = await import(pathToFileURL(resolve('.ssg/entry-server.mjs')).href)
  // The static-only App is absent from the client bundle. Copy its emitted
  // images/videos/styles from the server build and include its stylesheet.
  await cp('.ssg/assets', 'dist/assets', { recursive: true })
  const styles = (await readdir('.ssg/assets')).filter(name => name.endsWith('.css'))
  const template = (await readFile('dist/index.html', 'utf8')).replace(
    '</head>', styles.map(name => `<link rel="stylesheet" href="/assets/${name}">`).join('\n') + '\n</head>',
  )
  const marker = '<!--ssg-content-->'
  if (!template.includes(marker)) throw new Error('Static HTML insertion point is missing')
  const html = template.replace(marker, () => render())
  await writeFile('dist/index.html', html)
  // Only real image links from the rendered portfolio; anchors are not pages.
  const images = [...new Set([...html.matchAll(/<a\b[^>]*href="([^"<>]+\.(?:png|jpe?g|webp))"/g)]
    .map(match => match[1]).filter(url => url.startsWith('/assets/')))]
  const xml = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
  await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${xml(site.url)}</loc>
${images.map(url => `    <image:image><image:loc>${xml(new URL(url, site.url).href)}</image:loc></image:image>`).join('\n')}
  </url>
</urlset>
`)
  console.log('Generated static portfolio HTML in dist/index.html')
} finally {
  await rm('.ssg', { recursive: true, force: true })
}
