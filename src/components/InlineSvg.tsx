import React, { useId } from "react"

// Only trusted, repository-owned SVGs imported with ?raw are accepted here.
// Scope SVG definitions so repeated icons don't create duplicate document IDs.
export const InlineSvg: React.FC<{ src: string }> = ({ src }) => {
  const prefix = `svg-${useId().replace(/[^a-zA-Z0-9_-]/g, "_")}-`
  const ids = new Map<string, string>()
  for (const match of src.matchAll(/\bid=(["'])([^"']+)\1/g)) {
    ids.set(match[2], prefix + match[2])
  }
  const markup = src
    .replace(/\bid=(["'])([^"']+)\1/g, (_, quote, id) => `id=${quote}${ids.get(id)}${quote}`)
    .replace(/#([a-zA-Z_][\w:.-]*)/g, (reference, id) => ids.has(id) ? `#${ids.get(id)}` : reference)

  return (
    <span className="inline-svg" aria-hidden="true" style={{ display: "contents" }}
      dangerouslySetInnerHTML={{ __html: markup }} />
  )
}
