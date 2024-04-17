import "./home.css"

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-constant-condition */
import React from 'react';
import SVG from 'react-inlinesvg';

// import { Technologies } from './assets/technologies';
// import { TechBadge } from './components/TechBadge';
// import { IconLink } from './components/IconLink';

import "./components/IconLink.css"
import "./components/TechBadge.css"

import { Project, Projects } from './assets/projects';

import { IntroHTML } from './optimized/intro';

import PrideSVG from "./assets/pride.svg"

const YEAR = new Date().getFullYear()

const smallBackgroundsToPreload = [] as Promise<void>[]

for (const project of Projects) {
  smallBackgroundsToPreload.push(new Promise((resolve) => {
    if (/webm|mp4|mov/.test(project.source)) {
      resolve()

      return
    }

    const img = new Image()
    img.src = project.sourceSmall

    img.onload = () => {
      resolve()
    }
  }))
}

Promise.all(smallBackgroundsToPreload).then(() => {
  // preload the rest 

  const backgroundsToPreload = [] as Promise<void>[]

  for (const project of Projects) {
    backgroundsToPreload.push(new Promise((resolve) => {
      if (/webm|mp4|mov/.test(project.source)) {
        resolve()

        return
      }

      const img = new Image()
      img.src = project.source

      img.onload = () => {
        resolve()
      }
    }))
  }
})

const ProjectBackground: React.FC<{
  project: Project,
  hq?: boolean
  _key: string
}> = ({ project, hq, _key }) => {
  const source = hq ? project.source : project.sourceSmall

  if (/webm|mp4|mov/.test(source)) {
    return (
      <video draggable={false} key={_key} className='background' aria-label={project.title} autoPlay loop muted playsInline>
        <source src={source} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    )
  }

  return (
    <img draggable={false} key={_key} className='background' src={source} alt={project.title} />
  )
} 

// const Intro: React.FC = () => (
//   <section className="intro">
//     <h1 className="title">Hi, I'm <span>Andres Sweeney-Rios</span></h1>
    
//     <p className="bio">
//       <span>
//       I'm a California-based software engineer specializing in front-end web development and gameplay programming. I also have a strong background in back-end engineering, tools development, UI/UX design, DevOps, graphic design, and project management.
//       </span>
//     </p>

//     <div className='social'>
//       <IconLink title="" type="GitHub" href="https://github.com/AndresSweeneyRios" />
//       <IconLink title="" type="LinkedIn" href="https://www.linkedin.com/in/andres-sweeney-rios/" />
//       <IconLink title="" type="Twitter" href="https://twitter.com/Andr3wRiv3rs" />
//       <IconLink title="" type="Instagram" href="https://www.instagram.com/real.poison.apple/" />
//       <IconLink title="" type="Steam" href="https://steamcommunity.com/id/andr3wriv3rs/" />
//       {/* <IconLink title="" type="SoundCloud" href="https://soundcloud.com/poison_apple" /> */}
//     </div>

//     <div className='contact'>
//       <IconLink title="andressweeneyrios@gmail.com" type="Mail" href="mailto:andressweeneyrios@gmail.com" />
//       <IconLink title="poisonapple" type="Discord" href="" />
//     </div>

//     <div className='technologies'>
//       {Technologies.map((technology, index) => (
//         <TechBadge key={index} {...technology} />
//       ))}
//     </div>
//   </section>
// )

export const Home: React.FC = () => {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null)
  
  return (
    <div className="home">
      {/* <Intro /> */}
      <div dangerouslySetInnerHTML={{ __html: IntroHTML }} />

      <section className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          {Projects.map((project, index) => (
            <div key={index} className="project" onClick={() => {
              setSelectedProject(project)
              document.body.style.overflowY = 'hidden'
            }}>
              <ProjectBackground project={project} _key={project.title + index} />
              <div>
                <h3>{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="project-details">
            <ProjectBackground project={selectedProject} hq={true} _key={selectedProject.title} />
            <ProjectBackground project={selectedProject} hq={true} _key={selectedProject.title + 'bg'} />
            <div className='content'>
              <h3>{selectedProject.title}</h3>
              {selectedProject.description ? <p>{selectedProject.description}</p> : null}
              <button onClick={() => {
                setSelectedProject(null)
                document.body.style.overflowY = 'auto'
              }}><span>← BACK</span></button>
            </div>
            {/* <button onClick={() => setSelectedProject(null)}><span>×</span></button> */}
          </div>
        )}
      </section>

      <SVG style={{
        width: '10rem',
        maxWidth: '100%',
        marginTop: '9rem',
      }} title="Progressive pride flag" src={PrideSVG} />

      <footer>
        <p>
          <span>© {YEAR} Andres Sweeney-Rios</span>
        </p>
      </footer>
    </div>
  )
}
