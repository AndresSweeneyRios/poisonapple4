import "./TechBadge.css"

import React from "react"
import { InlineSvg as SVG } from "./InlineSvg"

import Aws from "../assets/technologies/aws.svg?raw"
import Bitcoin from "../assets/technologies/bitcoin.svg?raw"
import Bulma from "../assets/technologies/bulma.svg?raw"
import Csharp from "../assets/technologies/csharp.svg?raw"
import Digitalocean from "../assets/technologies/digitalocean.svg?raw"
import Discordjs from "../assets/technologies/discordjs.svg?raw"
import Docker from "../assets/technologies/docker.svg?raw"
import Electron from "../assets/technologies/electron.svg?raw"
import Ethereum from "../assets/technologies/ethereum.svg?raw"
import Express from "../assets/technologies/express.svg?raw"
import Figma from "../assets/technologies/figma.svg?raw"
import Firebase from "../assets/technologies/firebase.svg?raw"
import GamemakerStudio from "../assets/technologies/gamemaker_studio.svg?raw"
import GithubActions from "../assets/technologies/github_actions.svg?raw"
import GLSL from "../assets/technologies/glsl.svg?raw"
import Godot from "../assets/technologies/godot.svg?raw"
import Inkscape from "../assets/technologies/inkscape.svg?raw"
import Javascript from "../assets/technologies/javascript.svg?raw"
import Jquery from "../assets/technologies/jquery.svg?raw"
import Koa from "../assets/technologies/koa.svg?raw"
import Kubernetes from "../assets/technologies/kubernetes.svg?raw"
import Mollie from "../assets/technologies/mollie.svg?raw"
import Mongodb from "../assets/technologies/mongodb.svg?raw"
import Nginx from "../assets/technologies/nginx.svg?raw"
import Paypal from "../assets/technologies/paypal.svg?raw"
import Phantom from "../assets/technologies/phantom.svg?raw"
import Phaser from "../assets/technologies/phaser.svg?raw"
import Phonegap from "../assets/technologies/phonegap.svg?raw"
import Photoshop from "../assets/technologies/photoshop.svg?raw"
import Pixijs from "../assets/technologies/pixijs.svg?raw"
import ReactImage from "../assets/technologies/react.svg?raw"
import Stripe from "../assets/technologies/stripe.svg?raw"
import Threejs from "../assets/technologies/threejs.svg?raw"
import Typescript from "../assets/technologies/typescript.svg?raw"
import Unity from "../assets/technologies/unity.svg?raw"
import Vue from "../assets/technologies/vue.svg?raw"
import Vuetify from "../assets/technologies/vuetify.svg?raw"
import Webpack from "../assets/technologies/wpack.svg?raw"
import Webrtc from "../assets/technologies/webrtc.svg?raw"
import Websockets from "../assets/technologies/websockets.svg?raw"
import Sanity from "../assets/technologies/sanity.svg?raw"
import Tailwind from "../assets/technologies/tailwind.svg?raw"

export const Technologies = {
  "AWS": Aws,
  "S3": Aws,
  Bitcoin,
  Bulma,
  "C#": Csharp,
  "DigitalOcean": Digitalocean,
  "Discord.JS": Discordjs,
  Docker,
  Electron,
  Ethereum,
  Express,
  Figma,
  Firebase,
  "GameMaker: Studio": GamemakerStudio,
  "GitHub Actions": GithubActions,
  GLSL,
  Godot,
  "HLSL / ShaderLab": Unity,
  Inkscape,
  "JavaScript": Javascript,
  "jQuery": Jquery,
  Koa,
  Kubernetes,
  Mollie,
  "MongoDB": Mongodb,
  "NGINX": Nginx,
  "PayPal": Paypal,
  Phantom,
  Phaser,
  Phonegap,
  Photoshop,
  "PixiJS": Pixijs,
  "React": ReactImage,
  Stripe,
  "Three.js": Threejs,
  "TypeScript": Typescript,
  Unity,
  Vue,
  Vuetify,
  Webpack,
  "WebRTC": Webrtc,
  "WebSockets": Websockets,
  Sanity,
  Tailwind,
}

export const TechBadge: React.FC<{
  type: keyof typeof Technologies
}> = (props) => {
  return (
    <span className="tech-badge">
      <SVG src={Technologies[props.type]} />

      <span>
        {props.type}
      </span>
    </span>
  )
}
