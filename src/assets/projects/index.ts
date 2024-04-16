import AltX from "./altx.webm"
import AltXSmall from "./altx-small.webm"

import EverseedAvatarCustomizer from "./avatar-customizer.webp"
import EverseedAvatarCustomizerSmall from "./avatar-customizer-small.webp"

// import Bitt from "./bitt.webp"

import CorgiStack from "./corgi-stack.png"

import ElixirSale from "./elixir-sale.webp"
import ElixirSaleSmall from "./elixir-sale-small.webp"

import Euphrosyne from "./euphrosyne.webp"
import EuphrosyneSmall from "./euphrosyne_small.webp"

import Everfall from "./everfall.webp"
import EverfallSmall from "./everfall-small.webp"

import EverseedIngame from "./everseed_ingame.webp"
import EverseedIngameSmall from "./everseed_ingame_small.webp"

// import EverseedTitle from "./everseed_title.png"

import EverseedWebsite from "./everseed_website.webp"
import EverseedWebsiteSmall from "./everseed_website_small.webp"

import FirefightSmall from "./firefight-small.webp"
import Firefight from "./firefight.webp"

import Kismet from "./kismet.webp"

import Mudgolt from "./mudgolt.webp"
import MudgoltSmall from "./mudgolt_small.webp"

import Rakegg from "./rakegg.webm"
import RakeggSmall from "./rakegg-small.webm"

import SnicksnackOverworld from "./snicksnack-overworld.webp"
import SnicksnackOverworldSmall from "./snicksnack-overworld-small.webp"

import Stardust from "./stardust.webm"
import StardustSmall from "./stardust-small.webm"

import YaaiiA from "./yaaiia.webp"

export interface Project {
  title: string
  description: string
  source: string
  sourceSmall: string
}

export const Projects: Project[] = [
  {
    title: "Corgi Stack 3D",
    description: "Sequel to my entry for the Corgsmas game jam, Corgi Stack 3D is a reimagined puzzle-platformer which uses cute dogs as moving platforms.",
    source: CorgiStack,
    sourceSmall: CorgiStack,
  },
  {
    title: "Euphrosyne Collective",
    description: "Sacramento community website for EDM and Punk events.",
    source: Euphrosyne,
    sourceSmall: EuphrosyneSmall,
  },
  {
    title: "Everseed",
    description: "Strategic tower defense game that I worked extensively on.",
    source: EverseedIngame,
    sourceSmall: EverseedIngameSmall,
  },
  {
    title: "Avatar Customizer",
    description: `Character customizer for Everseed 
    that required an elixir to mint a new avatar that would be attached to your account for 
    the core game.`,
    source: EverseedAvatarCustomizer,
    sourceSmall: EverseedAvatarCustomizerSmall,
  },
  {
    title: "Everfall",
    description: "Website I built for a game studio based in South America.",
    source: Everfall,
    sourceSmall: EverfallSmall,
  },
  // {
    //   title: "Everseed Title",
    //   description: "Title screen for Everseed.",
    //   source: EverseedTitle,
    //   sourceSmall: EverseedTitle,
    // },
    {
      title: "Everseed Website",
      description: "",
      source: EverseedWebsite,
      sourceSmall: EverseedWebsiteSmall,
    },
    {
      title: "SnickSnack",
      description: "Social MMO with various minigames, shops, outfits, and a snowglobe builder. I joined the team as a UI developer, later working on the backend and our various minigames which were built in a mixture of web technologies and Unity. The alpha is still playable online.",
      source: SnicksnackOverworld,
    sourceSmall: SnicksnackOverworldSmall,
  },
  {
    title: "Firefight Launcher",
    description: "Custom Minecraft launcher written in in Vue.js for Firefight, an all-encompassing minecraft mod introducing gunplay.",
    source: Firefight,
    sourceSmall: FirefightSmall,
  },
  {
    title: "Elixir Sale",
    description: `Digital shop for Everseed where you could purchase what was known as an elixir. This 
    would be consumed by the avatar creator when minting your avatar.`,
    source: ElixirSale,
    sourceSmall: ElixirSaleSmall,
  },
  {
    title: "Kismet",
    description: "A surreal horror project.",
    source: Kismet,
    sourceSmall: Kismet,
  },
  {
    title: "YaaiiA",
    description: "Short for \"Yet another alien invasion in Atlanta\", this was an entry for the Dreamhack Atlanta 2018 game jam, developed in Unity.",
    source: YaaiiA,
    sourceSmall: YaaiiA,
  },
  {
    title: "MUDGOLT",
    description: "Online multiplayer MUD client with user generated content.",
    source: Mudgolt,
    sourceSmall: MudgoltSmall,
  },
  {
    title: "AltX",
    description: `A set of tools used in automating the user’s web browser. I joined an existing team 
    to improve workflows, refactor code from previous frontend developers, and create 
    new content utilizing SVG animations.`,
    source: AltX,
    sourceSmall: AltXSmall,
  },
  // {
  //   title: "Bitt",
  //   description: "Bitt is an extremely lightweight (~5kb) zero dependency reactive JavaScript framework.",
  //   source: Bitt,
  //   sourceSmall: Bitt,
  // },
  {
    title: "Rake.gg",
    description: "I worked on this online crypto casino as a full-stack developer. I was responsible for interfacing with APIs such as Infura and BlockCypher for managing funds, integrating it with the frontend, and creating 3D visuals for the minigames.",
    source: Rakegg,
    sourceSmall: RakeggSmall,
  },
  {
    title: "Stardust",
    description: "A publisher toolset in an Electron client using Stardust's blockchain technologies.",
    source: Stardust,
    sourceSmall: StardustSmall,
  },
]

