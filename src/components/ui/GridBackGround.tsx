import React from "react";
import { HeroText } from "./HeroText";
import { CardStack } from "./CardStack";

export const GridBackgroundDemo = () => {
  return (
    <div className="h-[calc(100vh-5rem)] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.4] bg-dot-black/[0.4] flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="container flex justify-center items-center w-full h-[calc(100vh-5rem)] ">
        <HeroText />
        <CardStack items={CARDS} />
      </div>
    </div>
  );
}

const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    content: (
      <p>
        These cards are amazing. Framer motion is a godsend ngl tbh fam 🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Senior Shitposter",
    content: (
      <p>
        I dont like this Twitter thing, so that it can easily
        be confused with adult sites.
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        The first rule of is that you do not talk about fight
        club. The second rule of is that you DO NOT TALK about fight
        club.
      </p>
    ),
  },
];
