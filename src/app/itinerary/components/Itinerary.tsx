import { HoverEffect } from "@/components/ui/HoverEffect";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

interface IProps {
  data: any;
  outputFromApi: boolean;
}

export const Itinerary = ({ data, outputFromApi }: IProps) => {
  if (!data) {
    return <div className="loader"></div>;
  }

  const requiredData = typeof data === "string" ? JSON.parse(data) : data;
  return (
    <div className="h-max w-full">
      <div className="h-screen">
        <h1 className="font-bold text-neutral-200 text-4xl text-center">
          {requiredData?.title}
        </h1>
        <div>
          <Button>Share</Button>
          <Button>Save as PDF</Button>
        </div>
        <div className="pt-5 md:pt-16 w-[100%] dark:bg-black bg-white">
          <HoverEffect
            items={requiredData?.itineraries}
            outputFromApi={outputFromApi}
          ></HoverEffect>
          {/* <div style={{ flex: 1, display: 'flex', justifyContent: 'center', marginTop: 20 }}>

            <p style={{ textDecorationLine: 'underline' }}>This itinerary is AI generated 🤖</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};
