import "./Experience.css"

import React from "react"
import SVG from "react-inlinesvg"
import { IconLink } from "../components/IconLink"
import { TechBadge, Technologies } from "../components/TechBadge"

import Amihan from "../assets/projects/amihan.svg"
import Rakegg from "../assets/projects/rakegg.svg"
import Aestell from "../assets/projects/aestell.svg"
import Aeternum from "../assets/projects/firefight.svg"
import Stardust from "../assets/projects/stardust.svg"
import Kraken from "../assets/projects/kraken.svg"
import Health from "../assets/projects/health.png"
import TripShred from "../assets/projects/tripshred.svg"

import SnicksnackKeepsies from "../assets/screenshots/snicksnack-keepsies.webp"
import SnicksnackKeepsiesSmall from "../assets/screenshots/snicksnack-keepsies_small.webp"
import SnicksnackOverworld from "../assets/screenshots/snicksnack-overworld.webp"
import SnicksnackOverworldSmall from "../assets/screenshots/snicksnack-overworld_small.webp"
import SnicksnackWardrobe from "../assets/screenshots/snicksnack-wardrobe.webp"
import SnicksnackWardrobeSmall from "../assets/screenshots/snicksnack-wardrobe_small.webp"
import EverseedLanding from "../assets/screenshots/everseed-landing.webp"
import EverseedLandingSmall from "../assets/screenshots/everseed-landing_small.webp"
import EverseedModel from "../assets/screenshots/everseed-model.webp"
import EverseedModelSmall from "../assets/screenshots/everseed-model_small.webp"
import EverseedGameplay from "../assets/screenshots/everseed-gameplay.webp"
import EverseedGameplaySmall from "../assets/screenshots/everseed-gameplay_small.webp"
import ElixirSale from "../assets/screenshots/elixir-sale.webp"
import ElixirSaleSmall from "../assets/screenshots/elixir-sale_small.webp"
import AvatarCulture from "../assets/screenshots/avatar-culture.webp"
import AvatarCultureSmall from "../assets/screenshots/avatar-culture_small.webp"
import AvatarCustomizer from "../assets/screenshots/avatar-customizer.webp"
import AvatarCustomizerSmall from "../assets/screenshots/avatar-customizer_small.webp"
import RakeggMp4 from "../assets/screenshots/rakegg.mp4"
import RakeggMp4Small from "../assets/screenshots/rakegg_small.mp4"
import AltxMp4 from "../assets/screenshots/altx.mp4"
import AltxMp4Small from "../assets/screenshots/altx_small.mp4"
import FirefightScreenshot from "../assets/screenshots/firefight.webp"
import FirefightScreenshotSmall from "../assets/screenshots/firefight_small.webp"
import StardustMp4 from "../assets/screenshots/stardust.mp4"
import StardustMp4Small from "../assets/screenshots/stardust_small.mp4"
import KrakenDesktopScreenshot from "../assets/screenshots/kraken-desktop.webp"
import KrakenDesktopScreenshotSmall from "../assets/screenshots/kraken-desktop_small.webp"
import KrakenProScreenshot from "../assets/screenshots/kraken-pro.webp"
import KrakenProScreenshotSmall from "../assets/screenshots/kraken-pro_small.webp"
import KrakenLearnCenter from "../assets/screenshots/kraken-learn.webp"
import KrakenLearnCenterSmall from "../assets/screenshots/kraken-learn_small.webp"
import ThoughtLeaderMp4 from "../assets/screenshots/thoughtleader.mp4"
import ThoughtLeaderMp4Small from "../assets/screenshots/thoughtleader_small.mp4"
import HealthMp4 from "../assets/screenshots/health.mp4"
import HealthMp4Small from "../assets/screenshots/health_small.mp4"
import ArchitectEngine from "../assets/screenshots/architect-engine.mp4"
import ArchitectEngineSmall from "../assets/screenshots/architect-engine_small.mp4"
import CrazeohCollage from "../assets/screenshots/crazeoh-collage.png"
import CrazeohCollageSmall from "../assets/screenshots/crazeoh-collage_small.webp"
import FarmFrens from "../assets/screenshots/farm_frens.webp"

export const Screenshot: React.FC<{
  url: string
  small?: string
  title: string
}> = (props) => {
  if (/\.(mp4|webm)$/.test(props.url)) {
    return (
      <a title={props.title} href={props.url}>
        <video 
          src={props.small || props.url} 
          loop 
          muted 
          autoPlay 
          playsInline
        />
      </a>
    )
  }

  return (
    <a style={{ backgroundImage: `url(${props.small || props.url})` }} href={props.url} title={props.title} />
  )
}

export const ExperienceItem: React.FC<{
  title: React.ReactNode
  role: React.ReactNode
  technologies: (keyof typeof Technologies)[]
  description: React.ReactNode
  links: React.ReactNode
  screenshots: React.ReactNode
  hideBar?: boolean
}> = (props) => {
  return (
    <div className="experience-item">
      {!props.hideBar && <div className="bar" />}

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
          {props.technologies.map(t => <TechBadge type={t} key={t} />)}
        </div>

        <div className="screenshots">
          {props.screenshots}
        </div>

        <div className="spacer" />
      </div>
    </div>
  )
}

export const AmihanExperienceBox: React.FC = (props) => {
  return (
    <div className="experience-box">
      <h1>
        <SVG src={Amihan} />

        <span>
          Amihan Entertainment
        </span>

        <span className="date text-dark">
          (Jan 2021 — May 2024)
        </span>
      </h1>

      <ExperienceItem 
        title="SnickSnack"
        role="Frontend, Backend, Gameplay"
        
        description={<>
          This was a social MMO with various minigames, shops, outfits, and a snowglobe builder.
          I joined the team as a UI developer, later working on the backend and minigames.
        </>}

        links={<></>}

        technologies={[
          "Phaser",
          "React",
          "WebSockets",
          "TypeScript",
          "AWS",
          "Unity",
          "C#",
        ]}

        screenshots={<>
          <Screenshot url={SnicksnackOverworld} small={SnicksnackOverworldSmall} title="Overworld Screenshot" />
          <Screenshot url={SnicksnackKeepsies} small={SnicksnackKeepsiesSmall} title="Keepsies Screenshot" />
          <Screenshot url={SnicksnackWardrobe} small={SnicksnackWardrobeSmall} title="Wardrobe Screenshot" />
        </>}
      />

      <ExperienceItem 
        title="Research Project"
        role="UI Development, Art Pipeline, Gameplay"
        
        description={<>
          After SnickSnack, we started prototyping a 3D browser game, where I led the engineering team. This included world 
          space UI systems, a finished gameplay loop, shader experiments, benchmarking, and art pipeline tools.
        </>}

        links={<></>}
        technologies={[
          "Three.js",
          "React",
          "GLSL",
          "TypeScript",
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
          "TypeScript",
        ]}

        screenshots={<></>}
      /> */}

      <ExperienceItem 
        title="Everseed"
        role="Gameplay, Tools Development, UI Development, Frontend, Graphics"
        
        description={<>
          We pivoted to a new roguelike tower defense prototype <b>Everseed</b>, 
          where you grow plants to defend against enemy waves. My role on this project 
          was primarily architecture, gameplay, and UI, with a focus on building 
          content tooling. We launched a closed playtest in May 2022.
        </>}

        links={<>
          <IconLink type="Youtube" title="Gameplay" href="https://youtu.be/MZN2rv-LCCw?si=BRVM6L84VaLN7o9y" />
          {/* <IconLink type="Website" title="Amihan" href="https://amihan.gg" /> */}
          {/* <IconLink type="Website" title="Everseed Website" href="https://everseed.com" /> */}
        </>}

        technologies={[
          "Unity",
          "C#",
          "HLSL / ShaderLab",
          // "Phantom",
          "React",
          "TypeScript",
        ]}

        screenshots={<>
          <Screenshot url={EverseedGameplay} small={EverseedGameplaySmall} title="Everseed Gameplay" />
          <Screenshot url={EverseedLanding} small={EverseedLandingSmall} title="Everseed Website Landing" />
          <Screenshot url={EverseedModel} small={EverseedModelSmall} title="Everseed Model Viewer" />
        </>}
      />

      <ExperienceItem 
        title="Everseed NFT Launch"
        role="Frontend"
        
        description={<>
          In preparation for our first NFT launch, I led the frontend team to build the 
          <> </><b>Everseed Elixir Website</b>, a digital shop where you could purchase an 
          item to be consumed when minting your avatar in the <b>Everseed Avatar Creator</b>, a 
          character customizer integrated with the core game.
        </>}

        links={<></>}

        technologies={[
          "Phantom",
          "React",
          "TypeScript",
        ]}

        screenshots={<>
          {/* <Screenshot url={ElixirScroll} title="Elixir Scroll" /> */}
          <Screenshot url={ElixirSale} small={ElixirSaleSmall} title="Elixir Sale" />
          {/* <Screenshot url={AvatarLanding} title="Avatar Creator Landing" /> */}
          <Screenshot url={AvatarCulture} small={AvatarCultureSmall} title="Avatar Culture" />
          <Screenshot url={AvatarCustomizer} small={AvatarCustomizerSmall} title="Avatar Customizer" />
        </>}
      />

      <ExperienceItem
        title="Farm Frens"
        role="Frontend, Gameplay, Graphics"

        description={<>
          After my departure from Kraken, I joined Amihan once again as a consultant for frontend and WebGL development.
          I worked on the rewrite of the Farm Frens mobile game, focusing on improving performance and building minigames in Cocos Creator.
        </>}

        links={<>
          <IconLink type="Website" title="Website" href="https://farmfrens.com/" />
        </>}

        screenshots={<>
          <Screenshot url={FarmFrens} small={FarmFrens} title="Farm Frens" />
        </>}

        technologies={[
          "TypeScript",
          "React",
          "AWS",
          "Figma",
          "GLSL",
        ]}
      />
    </div>
  )
}

export const FwdslashExperienceBox: React.FC = (props) => {
  return (
    <div className="experience-box">
      <h1>
        <SVG src={Rakegg} />

        <span>
          Fwdslash
        </span>

        <span className="date text-dark">
          (Sept 2020 — Jan 2021)
        </span>
      </h1>

      <ExperienceItem
        title="Rake.GG"
        role="Frontend, Backend"

        description={<>
          I worked on this online crypto casino as a fullstack developer, responsible for 
          interfacing with APIs such as Infura and BlockCypher for managing funds, integrating 
          it with the frontend, and creating 3D visuals for the minigames. 
        </>}

        links={<></>}
        
        technologies={[
          "Kubernetes",
          "Bitcoin",
          "Ethereum",
          "WebSockets",
          "Three.js",
          "Vue",
          "TypeScript",
        ]}

        screenshots={<>
          <Screenshot url={RakeggMp4} small={RakeggMp4Small} title="Rake.GG Jackpot" />
        </>}
      />
    </div>  
  )
}

export const AestellExperienceBox: React.FC = (props) => {
  return (
    <div className="experience-box">
      <h1>
        <SVG src={Aestell} />

        <span>
          Aestell
        </span>

        <span className="date text-dark">
          (Sept 2019 — Feb 2020)
        </span>
      </h1>

      <ExperienceItem
        title="AltX Bot Tools"
        role="Frontend"

        description={<>
          A set of tools used in automating the user’s web browser. I joined an existing team 
          to improve workflows and refactor code from previous frontend developers, and created 
          new content utilizing SVG animations.
        </>}

        links={<></>}
        
        technologies={[
          "Electron",
          "React",
          "TypeScript",
        ]}

        screenshots={<>
          <Screenshot url={AltxMp4} small={AltxMp4Small} title="AltX" />
        </>}
      />

      <ExperienceItem
        title="Supscript"
        role="Frontend, Backend"

        description={<>
          I led the team building Supscript, a service to provide users with a way to receive 
          notifications for new sales on limited items. I built the dashboard for this app, the subscription service, 
          and admin panel with analytics tools.
        </>}

        links={<></>}
        
        technologies={[
          "Stripe",
          "Vue",
          "TypeScript",
        ]}

        screenshots={<>
          {/* <Screenshot url={Emailsgg} title="Emails.GG" /> */}
        </>}
      />

      <ExperienceItem
        title="Emails.GG"
        role="Frontend, Backend"

        description={<>
          Our team built a mailing client to manage numerous email addresses simultaneously, 
          and to filter through them for important mail. I designed and wrote the frontend, and 
          maintained the backend after release.
        </>}

        links={<></>}
        
        technologies={[
          "Vue",
          "TypeScript",
        ]}

        screenshots={<>
          {/* <Screenshot url={Emailsgg} title="Emails.GG" /> */}
        </>}
      />
    </div>  
  )
}

export const AeternumExperienceBox: React.FC = () => {
  return (
    <div className="experience-box">
      <h1>
        <SVG src={Aeternum} />

        <span>
          Aeternum Industries
        </span>

        <span className="date text-dark">
          (June 2019 — Oct 2019)
        </span>
      </h1>

      <ExperienceItem
        title="Firefight Launcher"
        role="Frontend"

        description={<>
          I collaborated with various designers and game/systems engineers to build a desktop launcher for 
          the Firefight game server, which would launch and configure the user's Minecraft client to load into the game.
        </>}

        links={<></>}
        
        technologies={[
          "Electron",
          "Vue",
          "TypeScript",
        ]}

        screenshots={<>
          <Screenshot url={FirefightScreenshot} small={FirefightScreenshotSmall} title="Firefight Launcher" />
        </>}
      />
    </div> 
  )
}

export const StardustExperienceBox: React.FC = () => {
  return (
    <div className="experience-box">
      <h1>
        <SVG src={Stardust} />

        <span>
          Stardust
        </span>

        <span className="date text-dark">
          (Oct 2018 — Nov 2018)
        </span>
      </h1>

      <ExperienceItem
        title="Stardust Publisher Tools"
        role="Frontend"

        description={<>
          Desktop client for Stardust publishers to allow posting video game assets to a blockchain 
          for use in digital marketplaces. I designed the interface and developed the frontend for the app.
        </>}

        links={<></>}
        
        technologies={[
          "Electron",
          "Ethereum",
          "AWS",
          "Vue",
          "TypeScript",
        ]}

        screenshots={<>
          <Screenshot url={StardustMp4} small={StardustMp4Small} title="Stardust Publisher Tools" />
        </>}
      />
    </div> 
  )
}

export const KrakenExperienceBox: React.FC = () => {
  return (
    <div className="experience-box">
      <h1>
        <SVG src={Kraken} />

        <span>
          Kraken
        </span>

        <span className="date text-dark">
          (Aug 2024 — Feb 2025)
        </span>
      </h1>

      <ExperienceItem
        title="Marketing Department"
        role="Frontend"

        description={<>
          As part of Kraken's marketing team, I helped streamline publishing workflows, improved SEO in the learning center,
          built content authoring tools for our in-house CMS, and mentored frontend developers in frontend best practices.
        </>}

        links={<>
          <IconLink type="Website" title="Kraken" href="https://kraken.com" />
        </>}
        
        technologies={[
          "React",
          "Tailwind",
          "TypeScript",
          "Sanity",
        ]}

        screenshots={<>
          <Screenshot url={KrakenDesktopScreenshot} small={KrakenDesktopScreenshotSmall} title="Kraken Desktop" />
          <Screenshot url={KrakenLearnCenter} small={KrakenLearnCenterSmall} title="Kraken Learn Center" />
          <Screenshot url={KrakenProScreenshot} small={KrakenProScreenshotSmall} title="Kraken Pro" />
        </>}
      />
    </div> 
  )
}

export const HealthExperienceBox: React.FC = () => {
  return (
    <div className="experience-box">
      <h1>
        <img src={Health} />

        <span>
          Health
        </span>

        <span className="date text-dark">
          (Apr 2024 — Oct 2025)
        </span>
      </h1>

      <ExperienceItem
        title="Launcher"
        role="Frontend, Backend, Design"

        description={<>
          The HEALTH launcher is a platform for patrons of the band to access exclusive content,
          behind-the-scenes media, and early releases. I led the design and development of the 
          launcher, working closely with the band to create a unique experience for their fans.
        </>}

        links={<>
          <IconLink type="Website" title="Launcher" href="https://healthplus.plus" />
          <IconLink type="Patreon" title="Patreon" href="https://www.patreon.com/healthplus" />
          <IconLink type="Instagram" title="Instagram" href="https://www.instagram.com/_health_" />
        </>}
        
        technologies={[
          "React",
          "TypeScript",
          "AWS",
          "Figma",
          "Sanity",
        ]}

        screenshots={<>
          <Screenshot url={HealthMp4} small={HealthMp4Small} title="HEALTH Launcher" />
        </>}

      />

      <ExperienceItem
        title="Thought Leader"
        role="Frontend, Design"

        description={<>
          For one of the band's releases, I was tasked with creating an interactive promo.
          In one day, I designed this high performance webpage that featured over a dozen videos
          and animations, all while maintaining smooth scrolling and transitions.
        </>}

        links={<>
          <IconLink type="Website" title="Thought Leader Promo" href="https://healthplus.plus/THOUGHTLEADER" />
        </>}
        
        technologies={[
          "React",
          "TypeScript",
          "Figma",
        ]}

        screenshots={<>
          <Screenshot url={ThoughtLeaderMp4} small={ThoughtLeaderMp4Small} title="Thought Leader Promo" />
        </>}
      />
    </div> 
  )
}

export const TripshredExperienceBox: React.FC = () => {
  return (
    <div className="experience-box">
      <h1>
        <img src={TripShred} />

        <span>
          TripShred
        </span>

        <span className="date text-dark">
          (GAME STUDIO)
        </span>
      </h1>

      <ExperienceItem
        title="Architect Engine"
        role="Frontend, Gameplay, Graphics"

        description={<>
          Native WebGPU game engine I built in TypeScript, featuring a custom deferred renderer 
          with a stylized post-process stage using palette quantization and ordered dithering. 
          The runtime uses an ECS-style state model and Rapier3D physics integration. To compress the 3D assets,
          I build a custom GLTF pipeline that packs color channels and atlases textures.
        </>}

        links={<>
          <IconLink type="Website" title="Live Demo" href="https://andressweeneyrios.github.io/architect-engine/" />
          <IconLink type="Github" title="Source Code" href="https://github.com/AndresSweeneyRios/architect-engine" />
        </>}
        
        technologies={[
          "React",
          "TypeScript",
        ]}

        screenshots={<>
          <Screenshot url={ArchitectEngine} small={ArchitectEngineSmall} title="Architect Engine" />
        </>}
      />

      <ExperienceItem
        title="CrazeOh"
        role="Frontend, Gameplay, Graphics"

        description={<>
          Anomaly horror game I built in Three.js with custom post-processing shaders and a 3D audio engine,
          featuring level design by Kemal Albayrak. We collaborated closely for several months, releasing in June 2025 on Itch.io.

          <br/>
          <br/>

          <i>Will you uncover the truth behind CrazeOh's disappearance? Or will you become part of the stream?</i>
        </>}

        links={<>
          <IconLink type="Itchio" title="Itch.io" href="https://tripshred.itch.io/crazeoh" />
          <IconLink type="Website" title="Studio Website" href="https://tripshred.com" />
        </>}

        technologies={[
          "React",
          "TypeScript",
          "Three.js",
          "GLSL",
          "Electron",
          "Figma",
          "AWS",
        ]}

        screenshots={<>
          <Screenshot url={CrazeohCollage} small={CrazeohCollageSmall} title="CrazeOh Collage" />
        </>}
      />
    </div> 
  )
}
