import "./TechBadge.css"

import React from "react"
import SVG from "react-inlinesvg"
import type { Technology } from "../assets/technologies"

export const TechBadge: React.FC<Technology> = (technology) => {
  return (
    <span className="tech-badge">
      <SVG src={technology.icon} />

      <span>
        {technology.name}
      </span>
    </span>
  )
}
