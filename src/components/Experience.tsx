import "./Experience.css"

import React from "react"
import { InlineSvg as SVG } from "./InlineSvg"
import { IconLink } from "../components/IconLink"
import { TechBadge, Technologies } from "../components/TechBadge"

import Amihan from "../assets/projects/amihan.svg?raw"
import Rakegg from "../assets/projects/rakegg.svg?raw"
import Aestell from "../assets/projects/aestell.svg?raw"
import Aeternum from "../assets/projects/firefight.svg?raw"
import Stardust from "../assets/projects/stardust.svg?raw"
import Kraken from "../assets/projects/kraken.svg?raw"
import Health from "../assets/projects/health.png"
import EightBallMenu from "../assets/screenshots/8ball-menu-japanese.png"
import EightBallMenuSmall from "../assets/screenshots/8ball-menu-japanese-small.webp"
import EightBallGame from "../assets/screenshots/8ball-in-game.png"
import EightBallGameSmall from "../assets/screenshots/8ball-in-game-small.webp"
import HealthMembers2026 from "../assets/screenshots/health-members-2026.png"
import HealthMembers2026Small from "../assets/screenshots/health-members-2026.webp"
import HealthAccount2026 from "../assets/screenshots/health-account-2026.png"
import HealthAccount2026Small from "../assets/screenshots/health-account-2026.webp"
import TripShred from "../assets/projects/tripshred.svg?raw"

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
  position?: React.CSSProperties["backgroundPosition"]
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
    <a href={props.url} title={props.title}>
      <img className="screenshot-image" src={props.small || props.url} alt={props.title} loading="lazy" style={{ objectPosition: props.position }} />
    </a>
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
    <div className="experience-item" id={typeof props.title === "string" ? props.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") : undefined}>
      {!props.hideBar && <div className="bar" />}

      <div>
        <h4 className="title">
          {props.title}
          <span className="text-dark">
            ({props.role})
          </span>
        </h4>

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

export const AmihanContractExperienceBox: React.FC = () => (
  <div className="experience-box" id="amihan-contract">
    <h3><SVG src={Amihan} /><span>Amihan Entertainment — Contract</span><span className="date text-dark">(Feb 2025 — Sep 2025)</span></h3>
      <ExperienceItem
        title="Farm Frens"
        role="Frontend, Gameplay, Graphics"

        description={<>
          I returned to Amihan on a separate contract, consulting on frontend and WebGL development.
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

export const AmihanExperienceBox: React.FC = (props) => {
  return (
    <div className="experience-box">
      <h3>
        <SVG src={Amihan} />

        <span>
          Amihan Entertainment
        </span>

        <span className="date text-dark">
          (Jan 2021 — May 2024)
        </span>
      </h3>

      <ExperienceItem 
        title="SnickSnack"
        role="Frontend, Backend, Gameplay"
        
        description={<>
          SnickSnack combined minigames, shops, character customization, and a snowglobe builder in a social MMO.
          I started with UI development, then expanded into backend systems and minigame development.
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
        title="3D Browser Game Prototype"
        role="UI, Art Pipeline, Gameplay"
        
        description={<>
          Engineering lead on a 3D browser-game prototype, covering a complete gameplay loop,
          world-space UI, shader experiments, performance benchmarks, and art-pipeline tools.
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
        role="Gameplay, Tools, UI, Web, Graphics"
        
        description={<>
          Players grow plants to defend against enemy waves in this roguelike tower-defense game.
          My work focused on software architecture, gameplay systems, UI, and tools for creating game content.
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
          Frontend work for Everseed’s NFT launch included the Elixir storefront and an avatar
          customizer integrated with the game.
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


    </div>
  )
}

export const FwdslashExperienceBox: React.FC = (props) => {
  return (
    <div className="experience-box">
      <h3>
        <SVG src={Rakegg} />

        <span>
          Fwdslash
        </span>

        <span className="date text-dark">
          (Sept 2020 — Jan 2021)
        </span>
      </h3>

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
      <h3>
        <SVG src={Aestell} />

        <span>
          Aestell
        </span>

        <span className="date text-dark">
          (Sept 2019 — Feb 2020)
        </span>
      </h3>

      <ExperienceItem
        title="AltX Bot Tools"
        role="Frontend"

        description={<>
          Browser-automation tools built with Electron and React. I improved workflows,
          refactored the existing frontend, and added animated SVG interfaces.
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
          Supscript notified subscribers about limited-item releases. My work covered team leadership,
          the customer dashboard, subscription billing, and administration and analytics tools.
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
          Emails.GG brought multiple email accounts into one client, with filters for important messages.
          I designed and built the frontend, then maintained backend services after launch.
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
      <h3>
        <SVG src={Aeternum} />

        <span>
          Aeternum Industries
        </span>

        <span className="date text-dark">
          (June 2019 — Oct 2019)
        </span>
      </h3>

      <ExperienceItem
        title="Firefight Launcher"
        role="Frontend"

        description={<>
          Firefight needed a desktop launcher to configure Minecraft clients and connect players to its server.
          I developed the frontend in collaboration with designers and game engineers.
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
      <h3>
        <SVG src={Stardust} />

        <span>
          Stardust
        </span>

        <span className="date text-dark">
          (Oct 2018 — Nov 2018)
        </span>
      </h3>

      <ExperienceItem
        title="Stardust Publisher Tools"
        role="Frontend"

        description={<>
          Stardust’s publishing tools let game developers register assets on a blockchain for use in digital
          marketplaces. My role covered interface design and frontend development.
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
      <h3>
        <SVG src={Kraken} />

        <span>
          Kraken
        </span>

        <span className="date text-dark">
          (Aug 2024 — Feb 2025)
        </span>
      </h3>

      <ExperienceItem
        title="Marketing Department"
        role="Frontend"

        description={<>
          I contributed to marketing-site publishing workflows, internal CMS tools, and technical SEO
          for the learning center. I also helped frontend colleagues improve code quality and development practices.
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
    <div className="experience-box" id="health">
      <h3>
        <img src={Health} alt="HEALTH" />

        <span>
          Health
        </span>

        <span className="date text-dark">
          (April 2024 - Present)
        </span>
      </h3>

      <ExperienceItem
        title="HEALTH+ Launcher"
        role="Frontend, Backend, Design"
        description={<>
          I designed and developed the original HEALTH+ launcher in close collaboration with the band,
          creating a custom platform for patrons to access exclusive content, behind-the-scenes media,
          and early releases. The project included the initial build and subsequent updates.
        </>}
        links={<>
          <IconLink type="Patreon" title="Patreon" href="https://www.patreon.com/healthplus" />
          <IconLink type="Instagram" title="Instagram" href="https://www.instagram.com/_health_" />
        </>}
        technologies={["React", "TypeScript", "AWS", "Figma", "Sanity"]}
        screenshots={<>
          <Screenshot url={HealthMp4} small={HealthMp4Small} title="HEALTH+ Launcher v2" />
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

        links={<></>}
        
        technologies={[
          "React",
          "TypeScript",
          "Figma",
        ]}

        screenshots={<>
          <Screenshot url={ThoughtLeaderMp4} small={ThoughtLeaderMp4Small} title="Thought Leader Promo" />
        </>}
      />

      <ExperienceItem
        title="HEALTH+ Platform Redesign"
        role="Design, Frontend, Backend, Tools"
        description={<>
          I redesigned HEALTH+ with a searchable media library, audio playback and downloads,
          and personalized accounts with badges, stats, and unlockables. I handled the product
          and UI design alongside frontend and backend development.
          <br /><br />
          I also built content administration and media-processing tools, passwordless login,
          and Patreon and Discord integrations. When Patreon webhooks became unreliable,
          I developed automated membership reconciliation to keep patron access and Discord roles in sync.
        </>}
        links={<>
          <IconLink type="Website" title="Members Library" href="https://healthplus.plus/members" />
          <IconLink type="Website" title="Account" href="https://healthplus.plus/members/account" />
        </>}
        technologies={["React", "TypeScript", "AWS", "Figma", "Electron", "Discord.JS"]}
        screenshots={<>
          <Screenshot url={HealthMembers2026} small={HealthMembers2026Small} title="HEALTH+ Launcher v3 members library" />
          <Screenshot url={HealthAccount2026} small={HealthAccount2026Small} title="HEALTH+ Launcher v3 account and progression" />
        </>}
      />
    </div> 
  )
}

export const TripshredExperienceBox: React.FC = () => {
  return (
    <div className="experience-box" id="tripshred">
      <h3>
        <SVG src={TripShred} />

        <span>
          TripShred
        </span>

        <span className="date text-dark">
          (GAME STUDIO)
        </span>
      </h3>

    <ExperienceItem
      title="8-ball pool"
      role="Gameplay, Graphics, Networking"
      description={<>
        This browser-based 8-ball pool prototype combines a custom billiards simulation, 3D rendering,
        and relay-backed multiplayer. Simulation, rules, rendering, and networking are separated;
        command replay, state hashing, and reconnect recovery support multiplayer consistency.
        Bot opponents evaluate simulated shots using power, spin, and elevation.
        <br /><br />
        Localized into 21 languages across 25 locales, with automated Playwright UI and visual
        regression tests covering layout, text scaling, and interactions.
      </>}
      technologies={["TypeScript", "Three.js", "WebSockets"]}
      links={<><IconLink type="Website" title="Play 8-ball pool" href="https://andressweeneyrios.github.io/8ball/" />
        <IconLink type="Github" title="Source Code" href="https://github.com/AndresSweeneyRios/8ball" /></>}
      screenshots={<>
        <Screenshot url={EightBallMenu} small={EightBallMenuSmall} title="8-ball pool localized menu" />
        <Screenshot url={EightBallGame} small={EightBallGameSmall} position="center top" title="8-ball pool gameplay" />
      </>}
    />

      <ExperienceItem
        title="Architect Engine"
        role="Frontend, Gameplay, Graphics"

        description={<>
          Native WebGPU game engine I built in TypeScript, featuring a custom deferred renderer 
          with a stylized post-process stage using palette quantization and ordered dithering. 
          The runtime uses an ECS-style state model and Rapier3D physics integration. To compress the 3D assets,
          I built a custom GLTF pipeline that packs color channels and atlases textures.
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
