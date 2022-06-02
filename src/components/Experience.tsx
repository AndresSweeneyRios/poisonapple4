import "./Experience.css"

import React from "react"
import SVG from "react-inlinesvg"
import Amihan from "../assets/projects/amihan.svg"
import { IconLink } from "../components/IconLink"
import { TechBadge, Technologies } from "../components/TechBadge"

import SnicksnackKeepsies from "../assets/screenshots/snicksnack-keepsies.png"
import SnicksnackOverworld from "../assets/screenshots/snicksnack-overworld.png"
import SnicksnackWardrobe from "../assets/screenshots/snicksnack-wardrobe.png"
import EverseedLanding from "../assets/screenshots/everseed-landing.png"
import EverseedModel from "../assets/screenshots/everseed-model.png"
import ElixirSale from "../assets/screenshots/elixir-sale.png"
import ElixirScroll from "../assets/screenshots/elixir-scroll.png"
import AvatarLanding from "../assets/screenshots/avatar-landing.png"
import AvatarCulture from "../assets/screenshots/avatar-culture.png"
import AvatarCustomizer from "../assets/screenshots/avatar-customizer.png"

export const Screenshot: React.FC<{
  url: string
  title: string
}> = (props) => {
  return (
    <a style={{ backgroundImage: `url(${props.url})` }} href={props.url} title={props.title} />
  )
}

export const ExperienceItem: React.FC<{
  title: React.ReactNode
  role: React.ReactNode
  technologies: (keyof typeof Technologies)[]
  description: React.ReactNode
  links: React.ReactNode
  screenshots: React.ReactNode
}> = (props) => {
  return (
    <div className="experience-item">
      <div className="bar" />

      <div>
        <h1 className="title">
          {props.title}
          <span className="text-dark">
            ({props.role})
          </span>
        </h1>

        <p className="description text-dark">
          {props.description}
        </p>

        <div className="links">
          {props.links}
        </div>

        <div className="technologies">
          {props.technologies.map(t => <TechBadge type={t} />)}
        </div>

        <div className="screenshots">
          {props.screenshots}
        </div>

        <div className="spacer" />
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
      <h1 className="section-title">Experience</h1>

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

        <ExperienceItem 
          title="SnickSnack"
          role="Fullstack Web, Gameplay"
          
          description={<>
            This was a social MMO with various minigames, shops, outfits, and a snowglobe builder.
            I joined the team as a UI developer, and later worked on the backend and minigames, 
            which were built in a mixture of web technologies &amp; Unity. The alpha is still
            playable online.
          </>}

          links={<>
            <IconLink type={"Website"} href="https://snicksnack.club" title="Online Alpha" />
          </>}

          technologies={[
            "Phaser",
            "React",
            "WebSockets",
            "JavaScript",
            "S3",
            "Unity",
            "C#",
          ]}

          screenshots={<>
            <Screenshot url={SnicksnackOverworld} title="Overworld Screenshot" />
            <Screenshot url={SnicksnackKeepsies} title="Keepsies Screenshot" />
            <Screenshot url={SnicksnackWardrobe} title="Wardrobe Screenshot" />
          </>}
        />

        <ExperienceItem 
          title="Research Project"
          role="UI Development, Art Pipeline, Gameplay"
          
          description={<>
            After SnickSnack, we moved to a 3D browser game, where I led the engineering team to 
            lay the foundations for our prototype's code architecture, UI systems, gameplay loop, 
            and several different art experiments, running benchmarks and configuring our art pipeline.  
          </>}

          links={<></>}
          technologies={[
            "Three.js",
            "React",
            "GLSL",
            "JavaScript",
          ]}

          screenshots={<></>}
        />


        {/* <ExperienceItem 
          title="Amihan Website 1.0"
          role="Frontend, Design"
          
          description={<>
            First iteration of the Amihan website I built and designed, intended as a placeholder for the full version later.
          </>}

          links={<></>}
          
          technologies={[
            "Figma",
            "React",
            "JavaScript",
          ]}

          screenshots={<></>}
        /> */}

        <ExperienceItem 
          title="Everseed"
          role="Gameplay, Tools Development, UI Development, Frontend Web"
          
          description={<>
            We transitioned to a new roguelike tower defense prototype <b>Everseed</b>, 
            where you grow plants to defend against enemy waves. My role on this project 
            has been primarily in architecture, gameplay, and UI, with a focus on building 
            tooling for the design team. We launched a closed playtest in May 2022, and the 
            prototype is still in development.
            <br /><br />
            Working with the art team, I also built the frontend for 
            the <a href="https://everseed.com">Everseed Website</a>, which included 
            details about the project and previews for some of the early art.
          </>}

          links={<>
            <IconLink type="Youtube" title="Trailer" href="https://www.youtube.com/watch?v=mWuzyEHMxpg" />
            <IconLink type="Twitter" href="https://twitter.com/playeverseed" />
            <IconLink type="Website" title="Everseed Website" href="https://everseed.com" />
          </>}

          technologies={[
            "Unity",
            "C#",
            "HLSL / ShaderLab",
            // "Phantom",
            "React",
            "JavaScript",
          ]}

          screenshots={<>
            <Screenshot url={EverseedLanding} title="Everseed Website Landing" />
            <Screenshot url={EverseedModel} title="Everseed Model Viewer" />
          </>}
        />

        <ExperienceItem 
          title="Everseed NFT Launch"
          role="Frontend Web"
          
          description={<>
            In preparation for our first NFT launch, I worked with the art &amp; engineering teams 
            where I was responsible for developing the UI to create the <b>Everseed Elixir Website</b>, 
            which was a digital shop where you could purchase what was known as an <i>elixir</i>. This 
            would be consumed by the avatar creator when minting your avatar. Elixir sales on this website are now closed.
            <br /><br />
            Shortly after, we also launched the <b>Everseed Avatar Creator</b>, a character customizer 
            that required an elixir to mint a new avatar that would be attached to your account for 
            the core game. I was again responsible for UI development mainly. The customizer portion 
            of this website is still online and functional.
          </>}

          links={<>
            <IconLink type="Website" title="Post-Sale Elixir Website" href="https://elixir.everseed.com" />
            <IconLink type="Website" title="Everseed Avatar Creator" href="https://avatars.everseed.com" />
          </>}

          technologies={[
            "Phantom",
            "React",
            "JavaScript",
          ]}

          screenshots={<>
            <Screenshot url={ElixirScroll} title="Elixir Scroll" />
            <Screenshot url={ElixirSale} title="Elixir Sale" />
            <Screenshot url={AvatarLanding} title="Avatar Creator Landing" />
            <Screenshot url={AvatarCulture} title="Avatar Culture" />
            <Screenshot url={AvatarCustomizer} title="Avatar Customizer" />
          </>}
        />
      </div>
    </section>
  )
}