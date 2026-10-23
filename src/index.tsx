import React from "react"
import { createRoot, hydrateRoot } from "react-dom/client"
import { BackgroundCanvas } from "./components/Background"

if (import.meta.env.DEV) {
  // Keep Vite's normal live-editing workflow during development.
  import("./App").then(({ App }) => {
    createRoot(document.getElementById("root")!).render(<App />)
  })
} else {
  // The portfolio is static HTML; only the animated canvas needs JavaScript.
  hydrateRoot(document.getElementById("background")!, <BackgroundCanvas />)
}
