import "./TechBadge.css"

import React from "react"
import SVG from "react-inlinesvg"

import Aws from "../assets/technologies/aws.svg"
import Bitcoin from "../assets/technologies/bitcoin.svg"
import Bulma from "../assets/technologies/bulma.svg"
import Csharp from "../assets/technologies/csharp.svg"
import Digitalocean from "../assets/technologies/digitalocean.svg"
import Discordjs from "../assets/technologies/discordjs.svg"
import Docker from "../assets/technologies/docker.svg"
import Electron from "../assets/technologies/electron.svg"
import Ethereum from "../assets/technologies/ethereum.svg"
import Express from "../assets/technologies/express.svg"
import Figma from "../assets/technologies/figma.svg"
import Firebase from "../assets/technologies/firebase.svg"
import GamemakerStudio from "../assets/technologies/gamemaker_studio.svg"
import GithubActions from "../assets/technologies/github_actions.svg"
import GLSL from "../assets/technologies/glsl.svg"
import Godot from "../assets/technologies/godot.svg"
import Inkscape from "../assets/technologies/inkscape.svg"
import Javascript from "../assets/technologies/javascript.svg"
import Jquery from "../assets/technologies/jquery.svg"
import Koa from "../assets/technologies/koa.svg"
import Kubernetes from "../assets/technologies/kubernetes.svg"
import Mollie from "../assets/technologies/mollie.svg"
import Mongodb from "../assets/technologies/mongodb.svg"
import Nginx from "../assets/technologies/nginx.svg"
import Paypal from "../assets/technologies/paypal.svg"
import Phantom from "../assets/technologies/phantom.svg"
import Phaser from "../assets/technologies/phaser.svg"
import Phonegap from "../assets/technologies/phonegap.svg"
import Photoshop from "../assets/technologies/photoshop.svg"
import Pixijs from "../assets/technologies/pixijs.svg"
import ReactImage from "../assets/technologies/react.svg"
import Stripe from "../assets/technologies/stripe.svg"
import Threejs from "../assets/technologies/threejs.svg"
import Typescript from "../assets/technologies/typescript.svg"
import Unity from "../assets/technologies/unity.svg"
import Vue from "../assets/technologies/vue.svg"
import Vuetify from "../assets/technologies/vuetify.svg"
import Webpack from "../assets/technologies/wpack.svg"
import Webrtc from "../assets/technologies/webrtc.svg"
import Websockets from "../assets/technologies/websockets.svg"

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
