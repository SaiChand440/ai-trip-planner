"use client";
import { GlobeLoader } from "@/components/customcomponents/GlobeLoader";
import { TripPlanForm, formSchema } from "@/components/customcomponents/TripPlanForm";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { z } from "zod";

const myState = {
  destination: history.state.destination,
  date: {
    from: history.state?.date?.from,
    to: history.state?.date?.to,
  },
  usertype: history.state.usertype,
  budget: history.state.budget
};


export default function Page() {
  

  const [values, setValues] = useState<z.infer<typeof formSchema>>(myState);
  
   const { data, isLoading } = useQuery({queryKey : ["itinerary"],queryFn : async () => {
     return (
       await fetch("http://localhost:3000/api/create-trip", {
         method: "POST",
         body: JSON.stringify(values),
       })
     ).json();
   }});

  if (isLoading) {
    return (
      <>
        <div className="h-[calc(100vh-5rem)] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.4] bg-dot-black/[0.4] flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
              <GlobeLoader />
        </div>
      </>
    );
  }
  return (
    <>
      <div className="h-[calc(100vh-5rem)] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.4] bg-dot-black/[0.4] flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="container flex justify-start items-center w-full h-[calc(100vh-5rem)]  mt-3 flex-col">
          <h3 className="text-center text-6xl opacity-90 z-10 font-bold leading-snu pb-12">
            Let{`'`}s plan your{" "}
            <span className="text-indigo-300"> next trip </span>
          </h3>
          <TripPlanForm />
        </div>
      </div>
    </>
  );
}

