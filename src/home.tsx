import React from 'react';
import { Technologies } from './assets/technologies';
import { TechBadge } from './components/TechBadge';
import { IconLink } from './components/IconLink';

import "./home.css"

const YEAR = new Date().getFullYear()

export const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="intro">
        <h1 className="title">Hi, I'm <span>Andres Sweeney-Rios</span></h1>
        
        <p className="bio">
          <span>
            As a California-based software engineer, I specialize in integrating game development 
            with web technologies to build user-first, accessible digital experiences. I lead 
            projects from concept to launch, focusing on inclusivity and engagement.
          </span>
        </p>

        <div className='social'>
          <IconLink title="" type="GitHub" href="https://github.com/AndresSweeneyRios" />
          <IconLink title="" type="LinkedIn" href="https://www.linkedin.com/in/andres-sweeney-rios/" />
          <IconLink title="" type="Twitter" href="https://twitter.com/Andr3wRiv3rs" />
          <IconLink title="" type="Instagram" href="https://www.instagram.com/real.poison.apple/" />
          <IconLink title="" type="Steam" href="https://steamcommunity.com/id/andr3wriv3rs/" />
          {/* <IconLink title="" type="SoundCloud" href="https://soundcloud.com/poison_apple" /> */}
        </div>

        <div className='contact'>
          <IconLink title="andressweeneyrios@gmail.com" type="Mail" href="mailto:andressweeneyrios@gmail.com" />
          <IconLink title="poisonapple" type="Discord" href="" />
        </div>

        <div className='technologies'>
          {Technologies.map((technology, index) => (
            <TechBadge key={index} {...technology} />
          ))}
        </div>
      </div>

      <footer>
        <p>
          <span>© {YEAR} Andres Sweeney-Rios</span>
        </p>
      </footer>
    </div>
  )
}
