import "./IconLink.css"

import React from "react"
import SVG from "react-inlinesvg"
import Discord from "../assets/icons/discord.svg"
import Gamejolt from "../assets/icons/gamejolt.svg"
import Github from "../assets/icons/github.svg"
import Website from "../assets/icons/globe.svg"
import Linkedin from "../assets/icons/linkedin.svg"
import Npm from "../assets/icons/npm.svg"
import Soundcloud from "../assets/icons/soundcloud.svg"
import Twitch from "../assets/icons/twitch.svg"
import Twitter from "../assets/icons/twitter.svg"
import Youtube from "../assets/icons/youtube.svg"

export const LinkType = {
  Discord,
  Gamejolt,
  Github,
  Website,
  Linkedin,
  Npm,
  Soundcloud,
  Twitch,
  Twitter,
  Youtube,
}

export const IconLink: React.FC<{
  type: keyof typeof LinkType
  title?: string
  href: string
}> = ({ type, title, ...restProps }) => {
  return (
    <a {...restProps} className="icon-link" title={title ?? type}>
      <SVG src={LinkType[type]} />

      {/* {restProps.href} */}

      {title ?? type}
    </a>
  )
}
