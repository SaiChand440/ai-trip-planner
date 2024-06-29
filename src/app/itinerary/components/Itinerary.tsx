import { HoverEffect } from "@/components/ui/HoverEffect";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import {generatePdf} from '@/tools/pdfGenerator';

interface IProps {
  data: any;
  outputFromApi: boolean;
  dates: {from: Date, to: Date}
}

export const Itinerary = ({ data, outputFromApi, dates }: IProps) => {
  if (!data) {
    return <div className="loader"></div>;
  }

  const requiredData = typeof data === "string" ? JSON.parse(data) : data;
  const downloadPDF = ()=>{
    if(requiredData && dates){
      generatePdf(requiredData, dates)
    }
  }
  return (
    <div className="h-max w-full">
      <div className="h-screen">
        <div
          className="font-bold text-neutral-200 text-4xl text-center bg-cover bg-center bg-no-repeat dark:bg-black bg-white dark:text-white"
          style={{
            backgroundImage: `url(${requiredData?.welcome?.image})`,
          }}
        >
          <div
            className="h-[100%] w-[100%] py-10 md:py-32 bg-gradient-to-b from-[rgba(0,0,0,0.5)] via-[rgba(0,0,0,0)] via-30% to-[rgba(0,0,0,0.7)] transition-colors"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.2)",
            }}
          >
            {requiredData?.title}
          </div>
        </div>
        <div>
          <Button>Share</Button>
          <Button onClick={downloadPDF}>Save as PDF</Button>
        </div>
        <div className="pt-5 md:pt-16 w-[100%] dark:bg-black bg-white">
          <HoverEffect
            items={requiredData?.itineraries}
            outputFromApi={outputFromApi}
          ></HoverEffect>
        </div>
      </div>
    </div>
  );
};
