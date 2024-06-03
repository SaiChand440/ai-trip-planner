import React from "react";
import Image from "next/image";

export default function HomeSection2() {
  return (
    <div className="w-full h-auto md:h-[calc(100vh-5rem)] py-10 dark:bg-black bg-white">
      <div className="container mx-auto max-w-5xl lg:px-5">
        <h2 className="px-6 text-center text-3xl font-bold md:text-4xl lg:px-12 xl:text-5xl text-neutral-200 ">
          Your <span className="text-indigo-300">AI Guide</span> to Perfect
          Trips
        </h2>
        <div className="flex flex-wrap mt-4">
          <div className="w-full p-4 md:p-10 sm:w-1/2 md:mt-8">
            <h3 className="mb-3 w-fit bg-primary-green/70 text-2xl font-bold leading-none text-white md:text-3xl">
              The most simple
            </h3>
            <p className="text-gray-200">
              {
                "Design your ideal itinerary with Hadana AI. Our sophisticated algorithms consider your chosen attractions, budget, and preferences to craft a personalized travel plan that's perfect for you."
              }
            </p>
          </div>
          <div className="w-full p-4 md:p-6 sm:w-1/2 flex justify-center">
            <Image
              src={"/images/home_icon_1.png"}
              alt="temporary"
              width={"250"}
              height={"250"}
              //   className=""
            />
          </div>
        </div>
        <div className="flex flex-wrap flex-col-reverse sm:flex-row mt-4">
          <div className="w-full p-4 md:p-10 sm:w-1/2 flex justify-center">
            <Image
              src={"/images/home_icon_2.png"}
              alt="temporary"
              width={"250"}
              height={"250"}
              //   className="-my-5"
            />
          </div>
          <div className="w-full p-4 md:p-6 sm:w-1/2 md:mt-8">
            <h3 className="mb-3 w-fit bg-primary-green/70 text-2xl font-bold leading-none text-white md:text-3xl">
              Craft Your Adventure
            </h3>
            <p className="text-gray-200">
              Discover your perfect adventure with Hadana AI, the ultimate
              travel companion powered by Generative AI. Simply input your
              preferences, from destination desires to budget constraints, and
              let Hadana AI work its magic.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
