"use client"
import { TripPlanForm } from '@/components/customcomponents/TripPlanForm';
import { useLoadScript } from '@react-google-maps/api'; 
import { Session } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

export default function Page() {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '',
    libraries: ["places"]
  });

  if (!isLoaded) {
    return (
      <>
        <div className="h-[calc(100vh-5rem)] w-full dark:bg-black bg-white flex items-center justify-center mt-20">
            <h3 className="text-center md:text-4xl text-[24px] opacity-90 z-10 font-bold leading-snug">
              Loading...
            </h3>
        </div>
      </>
    );
  }
  return (
    <>
      {/* <div className="h-full w-full flex items-center justify-center dark:bg-black bg-white"> */}
          <div className="container flex justify-evenly md:justify-start items-center w-full h-[calc(100vh-5rem)] flex-col dark:bg-black bg-white">
            <p className="text-center lg:text-6xl md:text-4xl text-[24px] opacity-90 z-10 font-bold leading-snu md:pb-8 pb-2 pt-36 md:pt-28">
              Let{`'`}s plan your{" "}
              <span className="text-indigo-300"> next trip </span>
            </p>
            <TripPlanForm />
        </div>
      {/* </div> */}
    </>
  );
}
