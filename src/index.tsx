import "./index.css"
import ReactDOM from "react-dom/client"
import React from "react"
// import { Background } from "./components/Background"
// import Apple from "./assets/lowpoly_apple_transparent.webp"
// import SVG from "react-inlinesvg"
// import Amihan from "../assets/projects/amihan.svg"
import { AestellExperienceBox, AeternumExperienceBox, AmihanExperienceBox, FwdslashExperienceBox, StardustExperienceBox } from "./components/Experience"
import { MusicBox } from "./components/Hobbies"

const Block: React.FC = () => (
  <span 
    style={{
      width: "0.42em",
      height: "0.42em",
      backgroundColor: "currentColor",
      display: "inline-block",
      transform: "translateY(-0.06em)",
    }}
  />
) 

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
              in web development (fullstack, frontend-focused), gameplay engineering, and real-time networking, 
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

        <section className="experience">
          <h1>References</h1>

          <div className="experience-box">
            <h1 style={{ fontSize: "2.2em", marginBottom: "0.15em" }}>
              <span>Brian Cronin</span>
            </h1>

            <div className="experience-item">
              <p className="description text-dark">
                <span style={{ fontSize: "0.82em", lineHeight: "1.5em", display: "inline-block", opacity: 0.9 }}>
                  <Block/> Senior Gameplay Engineer @ Game Dojo <span className="date text-dark" style={{ fontSize: "0.85em", marginLeft: "0.3em" }}>
                    <b>[CURRENT POSITION]</b>
                  </span><br/>
                  <Block/> Lead Gameplay Engineer @ Amihan<br/>
                  <Block/> Senior Gameplay Engineer @ Unknown Worlds Entertainment. 
                </span>
                
                <br/><br/>
                
                I worked closely with Brian during our time together to architect a brand new codebase for the 
                alpha version of Everseed. He helped me fill the gaps in my gameplay engineering 
                knowledge and taught me a whole lot about general software techniques, such as memory optimization 
                and acyclic architecture, which I went on to teach to junior engineers within the company after his departure.
                
                <br/><br/>
                
                <span style={{ fontSize: "0.82em", lineHeight: "0.8em", display: "flex", flexDirection: "column", gap: "0.7em", opacity: 0.9 }}>
                  <a className="text-dark" href="mailto:programmingisgood@gmail.com">programmingisgood@gmail.com</a>
                  <a className="text-dark" href="https://www.linkedin.com/in/briangcronin">https://www.linkedin.com/in/briangcronin</a>
                  <a className="text-dark" href="tel:7604812079">+1-760-481-2079</a>
                </span>
              </p>
            </div>
          </div>

          <br/><br/>

          <div className="experience-box">
            <h1 style={{ fontSize: "2.2em", marginBottom: "0.15em" }}>
              <span>George Skleres</span>
            </h1>

            <div className="experience-item">
              <p className="description text-dark">
                <span style={{ fontSize: "0.82em", lineHeight: "1.5em", display: "inline-block", opacity: 0.9 }}>
                  <Block/> Lead Game Designer / Product Owner @ Amihan <span className="date text-dark" style={{ fontSize: "0.85em", marginLeft: "0.3em" }}>
                    <b>[CURRENT POSITION]</b>
                  </span><br/>
                  <Block/> Game Designer @ Riot Games<br/>
                </span>
                
                <br/><br/>

                George was the leader of the game team at Amihan and has been a consumer of 
                all my in-house developer tooling since he joined the company. He has 
                helped me grow my communication and organizational skills to more effectively collaborate 
                with a wide variety of people, which has helped resolve numerous conflicts in the workplace.
                
                <br/><br/>
                
                <span style={{ fontSize: "0.82em", lineHeight: "0.8em", display: "flex", flexDirection: "column", gap: "0.7em", opacity: 0.9 }}>
                  <a className="text-dark" href="mailto:george.skleres@gmail.com">george.skleres@gmail.com</a>
                  <a className="text-dark" href="https://www.linkedin.com/in/gskleres">https://www.linkedin.com/in/gskleres</a>
                  <span style={{ display: "flex", alignItems: "center"}}>
                    <a className="text-dark" href="tel:4046696664">+1-404-669-6664</a> <span className="date text-dark" style={{ 
                      fontSize: "0.7em", 
                      marginLeft: "0.8em", 
                      marginTop: "-0.1em",
                      display: "inline-block"
                    }}>
                      <b>[WHATSAPP ONLY]</b>
                    </span>
                  </span>
                </span>
              </p>
            </div>
          </div>

          <br/><br/>

          <div className="experience-box">
            <h1 style={{ fontSize: "2.2em", marginBottom: "0.15em" }}>
              <span>Austin McCalley</span>
            </h1>

            <div className="experience-item">
              <p className="description text-dark">
                <span style={{ fontSize: "0.82em", lineHeight: "1.5em", display: "inline-block", opacity: 0.9 }}>
                  <Block/> Software Engineer @ Intel <span className="date text-dark" style={{ fontSize: "0.85em", marginLeft: "0.3em" }}>
                    <b>[CURRENT POSITION]</b>
                  </span><br/>
                  <Block/> Software Engineer @ Atllas Inc.<br/>
                </span>
                
                <br/><br/>
                
                I volunteered over several years for a community known as Devcord dedicated to helping software 
                engineers, currently owned by Austin. He has witnessed me patiently
                working through code with hundreds of junior software engineers in different disciplines,
                honing my peer programming skills and learning how to share knowledge effectively, all the
                while mastering the essentials of web development, user interface design, and general
                software engineering principles. This community flourished into a network of hardened
                engineers and designers from all walks of life, whom I am still learning from every day.
                
                <br/><br/>
                
                <span style={{ fontSize: "0.82em", lineHeight: "0.8em", display: "flex", flexDirection: "column", gap: "0.7em", opacity: 0.9 }}>
                  <a className="text-dark" href="mailto:austin@austinmccalley.com">austin@austinmccalley.com</a>
                  <a className="text-dark" href="https://www.linkedin.com/in/austin-mccalley">https://www.linkedin.com/in/austin-mccalley</a>
                  <a className="text-dark" href="tel:5037808868">+1-503-780-8868</a>
                </span>
              </p>
            </div>
          </div>
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
