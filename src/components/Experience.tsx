import "./Experience.css"

import React from "react"
import SVG from "react-inlinesvg"
import Amihan from "../assets/projects/amihan.svg"
import { IconLink } from "../components/IconLink"
import { TechBadge, Technologies } from "../components/TechBadge"

import SnicksnackKeepsies from "../assets/screenshots/snicksnack-keepsies.png"
import SnicksnackOverworld from "../assets/screenshots/snicksnack-overworld.png"
import SnicksnackWardrobe from "../assets/screenshots/snicksnack-wardrobe.png"

const technologies: (keyof typeof Technologies)[] = [
  "C#",
  "React",
  "WebSockets",
]

export const ExperienceItem: React.FC = () => {
  return (
    <div className="experience-item">
      <div className="bar" />

      <div>
        <h1 className="title">
          SnickSnack 
          <span className="text-dark">
            (Fullstack Web, Gameplay)
          </span>
        </h1>

        <p className="description text-dark">
          A social MMO with various minigames, shops, outfits, and a snowglobe builder.
        </p>

        <div className="links">
          <IconLink type={"Website"} href="https://snicksnack.club" title="Online Alpha" />
        </div>

        <div className="technologies">
          {technologies.map(t => <TechBadge type={t} />)}
        </div>

        <div className="screenshots">
          <a style={{ backgroundImage: `url(${SnicksnackKeepsies})` }} href="#" />
          <a style={{ backgroundImage: `url(${SnicksnackOverworld})` }} href="#" />
          <a style={{ backgroundImage: `url(${SnicksnackWardrobe})` }} href="#" />
        </div>
      </div>
    </div>
  )
}

export const Experience: React.FC<{
  title: string
  icon?: string
  date?: string
}> = (props) => {
  return (
    <section className="experience">
      <h1 className="section-title">Professional Experience</h1>

      <div className="experience-box">
        <h1>
          <SVG src={Amihan} />
 
          <span>
            Amihan Entertainment
          </span>
 
          <span className="date text-dark">
            (Jan 2021 — Present)
          </span>
        </h1>

        <ExperienceItem />
        <ExperienceItem />
        <ExperienceItem />
        <ExperienceItem />
      </div>
    </section>
  )
}