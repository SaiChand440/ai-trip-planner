import React from "react";
import { HeroText } from "./HeroText";
import { CardStack } from "../ui/CardStack";
import singapore from '../../../public/images/hero_section/singapore.jpg'
import paris from '../../../public/images/hero_section/paris.jpg'
import dubai from '../../../public/images/hero_section/dubai.jpg'
import { createSupabaseClient } from "@/lib/supabase/browser";

export const GridBackgroundDemo = async () => {
  // const { data } = await createSupabaseClient().auth;
  // console.log("data",data)
  return (
    <>
      <div className="h-[calc(100vh-5rem)] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.4] bg-dot-black/[0.4] flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="container flex justify-center items-center w-full h-[calc(100vh-5rem)]">
          <HeroText />
          <CardStack items={CARDS} />
        </div>
      </div>
      <div className="h-screen"></div>
    </>
  );
}

const CARDS = [
  {
    id: 0,
    name: "Marina Bay Sands",
    designation: "Singapore",
    content: singapore,
  },
  {
    id: 1,
    name: "Eiffel Tower",
    designation: "Paris",
    content: paris,
  },
  {
    id: 2,
    name: "Burj Khalifa",
    designation: "Dubai",
    content: dubai,
  },
];
