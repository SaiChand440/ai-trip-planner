"use client";
import React from 'react'

export default function page() {
  return (
    <>
      <div className="h-[calc(100vh-5rem)] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.4] bg-dot-black/[0.4] flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="container flex justify-center items-center w-full h-[calc(100vh-5rem)]">
          {/* <HeroText /> */}
          {/* <CardStack items={CARDS} /> */}
        </div>
      </div>
    </>
  );
}
