import "./IconLink.css"

import React from "react"
import SVG from "react-inlinesvg"
import Discord from "../assets/icons/discord.svg"
// import Gamejolt from "../assets/icons/gamejolt.svg"
import Github from "../assets/icons/github.svg"
import Website from "../assets/icons/globe.svg"
import Linkedin from "../assets/icons/linkedin.svg"
import Npm from "../assets/icons/npm.svg"
import Soundcloud from "../assets/icons/soundcloud.svg"
import Twitch from "../assets/icons/twitch.svg"
import Twitter from "../assets/icons/twitter.svg"
import Youtube from "../assets/icons/youtube.svg"
import Instagram from "../assets/icons/instagram.svg"
import Steam from "../assets/icons/steam.svg"
import Mail from "../assets/icons/mail.svg"

const LinkType = {
  Discord,
  // Gamejolt,
  "GitHub": Github,
  Website,
  "LinkedIn": Linkedin,
  "NPM": Npm,
  "SoundCloud": Soundcloud,
  Twitch,
  Twitter,
  "YouTube": Youtube,
  Instagram,
  Steam,
  Mail,
}

export const IconLink: React.FC<{
  type: keyof typeof LinkType
  title?: string
  href: string
}> = ({ type, title, ...restProps }) => {
  if (restProps.href === "") return (
    <span className="icon-link" style={{ textTransform: "none" }}>
      <SVG src={LinkType[type]} />

      {title ?? type}
    </span>
  )

  return (
    <a {...restProps} className="icon-link" title={title || type} style={{ textTransform: "none" }}>
      <SVG src={LinkType[type]} />

      {title ?? type}
    </a>
  )
}
