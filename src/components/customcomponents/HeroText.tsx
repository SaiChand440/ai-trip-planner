"use client"
import React from 'react'
import { TypeWriter } from './TypeWriter';
import { StartPlanningButton } from './StartPlanningButton';

export const HeroText = () => {


  return (
    <div className="flex flex-col items-center">
      <h1 className="font-extrabold text-neutral-200 lg:text-8xl text-6xl z-10 text-center">
        {"Plan your trip based on"}
      </h1>
      <div className="z-10 px-20 py-5">
        <TypeWriter />
      </div>
      <p className="text-center text-xl m-4">
       {"Unleash Your Wanderlust with TravelMate AI: Where Intelligent Planning Meets Limitless Adventure!"}
      </p>
     <StartPlanningButton />
    </div>
  );
}
