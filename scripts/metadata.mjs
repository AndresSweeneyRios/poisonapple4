export const site = {
  url: 'https://poisonapple.dev/',
  name: 'Andres Sweeney-Rios',
  title: 'Andres Sweeney-Rios | Interactive Web, Games & Graphics',
  description: 'Interactive web applications, browser games, and real-time graphics by Andres Sweeney-Rios. Explore HEALTH+, 8-ball pool, and a custom WebGPU engine.',
  image: 'https://poisonapple.dev/social-preview.png',
}

const person = { '@id': `${site.url}#andres` }
const website = { '@id': `${site.url}#website` }
const projects = [
  {
    '@type': 'CreativeWork', '@id': `${site.url}#8-ball-pool`,
    name: '8-ball pool', url: `${site.url}#8-ball-pool`,
    description: 'Browser-based 8-ball pool with a custom billiards simulation, shot-searching bots, relay-backed multiplayer, and localization across 21 languages and 25 locales.',
    author: person,
    sameAs: ['https://andressweeneyrios.github.io/8ball/', 'https://github.com/AndresSweeneyRios/8ball'],
    keywords: ['TypeScript', 'Three.js', 'billiards simulation', 'multiplayer', 'localization', 'UI regression testing'],
  },
  {
    '@type': 'SoftwareSourceCode', '@id': `${site.url}#architect-engine`,
    name: 'Architect Engine', url: `${site.url}#architect-engine`,
    description: 'Native WebGPU game-engine prototype with a deferred renderer, ECS-style state, Rapier3D physics, and a custom GLTF asset pipeline.',
    author: person, programmingLanguage: 'TypeScript',
    codeRepository: 'https://github.com/AndresSweeneyRios/architect-engine',
    sameAs: 'https://andressweeneyrios.github.io/architect-engine/',
  },
  {
    '@type': 'CreativeWork', '@id': `${site.url}#health-platform-redesign`,
    name: 'HEALTH+ Platform Redesign', url: `${site.url}#health-platform-redesign`,
    description: 'Membership-platform redesign covering a searchable media library, personalized accounts, content tools, passwordless login, and Patreon/Discord reconciliation.',
    contributor: person, sameAs: 'https://healthplus.plus/',
  },
  {
    '@type': 'CreativeWork', '@id': `${site.url}#crazeoh`,
    name: 'CrazeOh', url: `${site.url}#crazeoh`,
    description: 'Released anomaly-horror game built with Three.js, custom postprocessing shaders, and 3D audio, with level design by Kemal Albayrak.',
    author: person, contributor: { '@type': 'Person', name: 'Kemal Albayrak' },
    sameAs: 'https://tripshred.itch.io/crazeoh',
  },
]

export const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person', ...person, name: site.name, alternateName: ['Andy', 'Poison Apple'],
      url: site.url, jobTitle: 'Software Engineer',
      description: 'California-based software engineer specializing in interactive web applications, gameplay, and real-time graphics.',
      knowsAbout: ['TypeScript', 'React', 'Three.js', 'WebGPU', 'WebGL', 'Gameplay programming', 'Real-time graphics', 'Backend engineering', 'UI/UX design', 'Developer tools'],
      sameAs: ['https://github.com/AndresSweeneyRios', 'https://www.linkedin.com/in/andres-sweeney-rios/'],
    },
    { '@type': 'WebSite', ...website, url: site.url, name: site.name, alternateName: 'poisonapple.dev', publisher: person, inLanguage: 'en' },
    {
      '@type': 'ProfilePage', '@id': `${site.url}#profile`, url: site.url,
      name: site.title, description: site.description, inLanguage: 'en',
      mainEntity: person, isPartOf: website,
      hasPart: projects.map(project => ({ '@id': project['@id'] })),
      primaryImageOfPage: { '@type': 'ImageObject', url: site.image, width: 1200, height: 630 },
    },
    ...projects,
  ],
}

const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;')
export function headMetadata() {
  const meta = (kind, name, value) => `<meta ${kind}="${name}" content="${escape(value)}">`
  return [
    `<title>${escape(site.title)}</title>`,
    `<link rel="canonical" href="${site.url}">`,
    meta('name', 'description', site.description),
    meta('name', 'author', site.name),
    meta('name', 'robots', 'index, follow, max-image-preview:large'),
    meta('name', 'theme-color', '#0b0705'),
    meta('property', 'og:type', 'website'),
    meta('property', 'og:url', site.url),
    meta('property', 'og:site_name', site.name),
    meta('property', 'og:locale', 'en_US'),
    meta('property', 'og:title', site.title),
    meta('property', 'og:description', site.description),
    meta('property', 'og:image', site.image),
    meta('property', 'og:image:type', 'image/png'),
    meta('property', 'og:image:width', '1200'),
    meta('property', 'og:image:height', '630'),
    meta('property', 'og:image:alt', 'Andres Sweeney-Rios: interactive web, games, and graphics. Selected work: HEALTH+, 8-ball pool, and Architect Engine.'),
    meta('name', 'twitter:card', 'summary_large_image'),
    meta('name', 'twitter:title', site.title),
    meta('name', 'twitter:description', site.description),
    meta('name', 'twitter:image', site.image),
    meta('name', 'twitter:image:alt', 'Andres Sweeney-Rios: interactive web, games, and graphics.'),
    '<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96.png">',
    '<link rel="icon" href="/favicon.ico" sizes="any">',
    '<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">',
    `<script type="application/ld+json">${JSON.stringify(structuredData).replaceAll('<', '\\u003c')}</script>`,
  ].join('\n  ')
}
