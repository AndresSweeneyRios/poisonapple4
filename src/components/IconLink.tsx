import "./IconLink.css"

import React from "react"
import SVG from "react-inlinesvg"
import Discord from "../assets/icons/discord.svg"
import Gamejolt from "../assets/icons/gamejolt.svg"
import Github from "../assets/icons/github.svg"
import Website from "../assets/icons/globe.svg"
import Linkedin from "../assets/icons/linkedin.svg"
import Npm from "../assets/icons/Npm.svg"
import Soundcloud from "../assets/icons/Soundcloud.svg"
import Twitch from "../assets/icons/Twitch.svg"
import Twitter from "../assets/icons/Twitter.svg"
import Youtube from "../assets/icons/Youtube.svg"

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

      {title ?? type}
    </a>
  )
}
