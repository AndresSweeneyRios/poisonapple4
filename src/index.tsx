import "./index.css"
import ReactDOM from "react-dom"
import React from "react"
import { Background } from "./components/Background"
import Apple from "./assets/lowpoly_apple_transparent.webp"

const App: React.FC = () => {
  return (
    <>
      <Background />
      <main>
        <img src={Apple} />
        <h1>Hey, I'm Andres</h1>
      </main>
    </>
  )
}

ReactDOM.render(<App />, document.body)
