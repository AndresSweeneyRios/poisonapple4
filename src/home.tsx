/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-constant-condition */
import React from 'react';

// import { Technologies } from './assets/technologies';
// import { TechBadge } from './components/TechBadge';
// import { IconLink } from './components/IconLink';

import "./components/IconLink.css"
import "./components/TechBadge.css"

import { Project, Projects } from './assets/projects';

import "./home.css"
import { IntroHTML } from './optimized/intro';

const YEAR = new Date().getFullYear()

const smallBackgroundsToPreload = [] as Promise<void>[]

for (const project of Projects) {
  smallBackgroundsToPreload.push(new Promise((resolve) => {
    const img = new Image()
    img.src = project.sourceSmall

    img.onload = () => {
      resolve()
    }
  }))
}

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
//   <div className="intro">
//     <h1 className="title">Hi, I'm <span>Andres Sweeney-Rios</span></h1>
    
//     <p className="bio">
//       <span>
//         As a California-based software engineer, I specialize in integrating game development 
//         with web technologies to build user-first, accessible digital experiences. I lead 
//         projects from concept to launch, focusing on inclusivity and engagement.
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
//   </div>
// )

export const Home: React.FC = () => {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null)
  
  return (
    <div className="home">
      {/* <Intro /> */}
      <div className="intro" dangerouslySetInnerHTML={{ __html: IntroHTML }} />

      <div className="projects">
        <h1>Projects</h1>
        <div className="project-list">
          {Projects.map((project, index) => (
            <div key={index} className="project" onClick={() => {
              setSelectedProject(project)
            }}>
              <ProjectBackground project={project} _key={project.title + index} />
              {/* <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div> */}
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="project-details">
            <ProjectBackground project={selectedProject} hq={true} _key={selectedProject.title} />
            <ProjectBackground project={selectedProject} hq={true} _key={selectedProject.title + 'bg'} />
            <div className='content'>
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.description}</p>
            </div>
            <button onClick={() => setSelectedProject(null)}><span>×</span></button>
          </div>
        )}
      </div>

      <footer>
        <p>
          <span>© {YEAR} Andres Sweeney-Rios</span>
        </p>
      </footer>
    </div>
  )
}
