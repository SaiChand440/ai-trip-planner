import React from "react";
import { HoverEffect } from "@/components/ui/HoverEffect";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/router";
import { Share2, ArrowDownToLine } from "lucide-react";
import toast from 'react-hot-toast';
import {generatePdf} from '@/tools/pdfGenerator';
import { cn } from "@/lib/utils";

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

  const copyToClipboard = async () => {
    const link = window.location.href;
    try {
      await navigator.clipboard.writeText(link);
      toast.success("Link copied to clipboard");
    } catch (err) {
      console.error("Failed to copy link: ", err);
      toast.error("Failed to copy link")
    }
  };
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
            className="h-[100%] w-[100%] mx-auto py-10 md:py-32 bg-gradient-to-b from-[rgba(0,0,0,0.5)] via-[rgba(0,0,0,0)] via-30% to-[rgba(0,0,0,0.7)] transition-colors"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.2)",
            }}
          >
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            {requiredData?.title}
            <div className="flex">
           
            <Button id="share" variant={'link'} onClick={copyToClipboard}>
            <Share2 className={cn("h-8 w-8")}/>
            </Button>
            <Button id="download_pdf" variant={'link'} onClick={downloadPDF}>
            <ArrowDownToLine className={cn("h-8 w-8")}/>
            </Button>
            </div>
            </div>
          </div>
        </div>
        <div>
          
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
