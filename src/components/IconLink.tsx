import "./IconLink.css"

import React from "react"
import { InlineSvg as SVG } from "./InlineSvg"
import Discord from "../assets/icons/discord.svg?raw"
import Gamejolt from "../assets/icons/gamejolt.svg?raw"
import Github from "../assets/icons/github.svg?raw"
import Website from "../assets/icons/globe.svg?raw"
import Linkedin from "../assets/icons/linkedin.svg?raw"
import Npm from "../assets/icons/npm.svg?raw"
import Soundcloud from "../assets/icons/soundcloud.svg?raw"
import Twitch from "../assets/icons/twitch.svg?raw"
import Twitter from "../assets/icons/twitter.svg?raw"
import Youtube from "../assets/icons/youtube.svg?raw"
import Patreon from "../assets/icons/patreon.svg?raw"
import Instagram from "../assets/icons/instagram.svg?raw"
import Itchio from "../assets/icons/itchio.svg?raw"

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
  Patreon,
  Instagram,
  Itchio,
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
