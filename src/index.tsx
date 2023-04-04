import "./index.css"
import ReactDOM from "react-dom/client"
import React from "react"
// import { Background } from "./components/Background"
// import Apple from "./assets/lowpoly_apple_transparent.webp"
// import SVG from "react-inlinesvg"
// import Amihan from "../assets/projects/amihan.svg"
import { AestellExperienceBox, AeternumExperienceBox, AmihanExperienceBox, FwdslashExperienceBox, StardustExperienceBox } from "./components/Experience"
import { MusicBox } from "./components/Hobbies"

const App: React.FC = () => {
  return (
    <>
      {/* <Background /> */}

      {/* <div id="background" /> */}
      
      <main>
        <section id="intro">
          {/* <img src={Apple} /> */}
          <div>
            <h1>Hey, I'm Andres Sweeney-Rios</h1>
            <p className="text-dark">
              I'm a generalist software engineer from California. I work mostly 
              in web development (fullstack, frontend focused), gameplay engineering, and realtime networking, 
              but I also have an interest in tools development, web design, 
              graphics programming, and audio programming.

              {/* <span style={{ fontSize: "0.8em", lineHeight: "0.8em", display: "flex", flexDirection: "column", gap: "0.7em" }}>
                <a href="tel:12094527454">+1-209-452-7454</a>
                <a href="mailto:andressweeneyrios@gmail.com">andressweeneyrios@gmail.com</a>
                <a href="https://www.linkedin.com/in/andres-sweeney-rios/">https://www.linkedin.com/in/andres-sweeney-rios/</a>
              </span> */}
            </p>
          </div>
        </section>

        <section className="experience">
          <h1>Contact</h1>
          <p style={{ fontSize: "1.3em", lineHeight: "0.8em", display: "flex", flexDirection: "column", gap: "0.7em", opacity: 0.7 }}>
            <a href="mailto:andressweeneyrios@gmail.com">andressweeneyrios@gmail.com</a>
            <a href="https://www.linkedin.com/in/andres-sweeney-rios/">https://www.linkedin.com/in/andres-sweeney-rios/</a>
            <a href="tel:12094527454">+1-209-452-7454</a>
          </p>
        </section>
        
        <section className="experience">
          <h1>Experience</h1>
          <AmihanExperienceBox />
          <FwdslashExperienceBox />
          <AestellExperienceBox />
          <AeternumExperienceBox />
          <StardustExperienceBox />
        </section>
        
        {/* <section className="experience hobbies">
          <h1>Hobbies</h1>
          <MusicBox />
        </section> */}
      </main>
    </>
  )
}

ReactDOM.createRoot(document.body).render(<App />)
