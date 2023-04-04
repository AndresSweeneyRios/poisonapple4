import "./Hobbies.css"
import React from "react"
import { ExperienceItem } from "./Experience"
import { IconLink } from "./IconLink"
// import { TechBadge } from "./TechBadge"
import SVG from "react-inlinesvg"
import MusicIcon from "../assets/icons/music.svg"

export const MusicBox: React.FC = () => {
  return (
    <div className="experience-box">
      <h1>
        <SVG src={MusicIcon} />
        <span>
          Music
        </span>
      </h1>

      <ExperienceItem
        title={null}
        role={null}

        description={<>
          I'm a self taught multi-instrumentalist, mostly playing the piano and the guitar. I come from 
          a musical family and frequently jam with my brothers on the weekends 🤘
          <br/><br/>
          In addition, I often practice music production, audio engineering, and live music coding. 
          This has led me to create a JavaScript music composition framework, called <a href="https://github.com/AndresSweeneyRios/bittune">BitTune</a>, which 
          allows you to write realtime music in code. All compositions use generators and are super dynamic, modules can be 
          distributed as standalone functions, and audio can be filtered in just a few lines of code.
        </>}

        links={<>
          <IconLink type="Github" title="BitTune Repository" href="https://github.com/AndresSweeneyRios/bittune" />
          <IconLink type="Soundcloud" title="SoundCloud" href="https://soundcloud.com/poison_apple" />
        </>}
        
        technologies={[
        ]}

        screenshots={<>
        </>}
      />
    </div> 
  )
}