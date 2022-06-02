import "./index.css"
import ReactDOM from "react-dom/client"
import React from "react"
import { Background } from "./components/Background"
import Apple from "./assets/lowpoly_apple_transparent.webp"
import SVG from "react-inlinesvg"
import Amihan from "../assets/projects/amihan.svg"
import { AestellExperienceBox, AmihanExperienceBox, BareshelvesExperienceBox as FwdslashExperienceBox } from "./components/Experience"

const App: React.FC = () => {
  return (
    <>
      <Background />
      
      <main>
        <section id="intro">
          <img src={Apple} />
          <div>
            <h1>Hey, I'm Andres</h1>
            <p className="text-dark">
              I'm a generalist software engineer from California. I work mostly 
              in web development (fullstack), gameplay engineering, and realtime networking, 
              but I also have some experience in tools development, web design, 
              graphics programming, and audio programming.
            </p>
          </div>
        </section>
        
        <section className="experience">
          <h1>Experience</h1>
          <AmihanExperienceBox />
          <FwdslashExperienceBox />
          <AestellExperienceBox />
        </section>
      </main>
    </>
  )
}

ReactDOM.createRoot(document.body).render(<App />)
