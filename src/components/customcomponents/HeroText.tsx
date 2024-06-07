"use client"
import React from 'react'
import { TypeWriter } from './TypeWriter';
import { StartPlanningButton } from './StartPlanningButton';

export const HeroText = () => {


  return (
    <div className="flex flex-col items-center sm:w-[100%] md:w-[50%] lg:w-[75%] xl:w-auto">
      <h1 className="font-extrabold text-neutral-200 lg:text-6xl xl:text-8xl text-4xl text-center">
        {"Plan your trip based on"}
      </h1>
      <div className="md:px-20 py-5">
        <TypeWriter />
      </div>
      <p className="w-full md:w-[75%] xl:w-full text-center text-xl m-3">
       {"Unleash Your Wanderlust with Hadana: Where Intelligent Planning Meets Limitless Adventure!"}
      </p>
     <StartPlanningButton />
    </div>
  );
}
