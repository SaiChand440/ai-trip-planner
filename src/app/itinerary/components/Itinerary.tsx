import { HoverEffect } from "@/components/ui/HoverEffect";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

interface IProps {
  data: any;
}

export default function Itinerary({ data }: IProps) {

  return (
    <div className="h-max w-full" style={{ backgroundColor: 'black' }}>
      <div className="h-screen z-50">
        <h1 className="font-bold text-neutral-200 text-4xl text-center z-50">
          {data?.data?.title}
        </h1>
        <div className="mt-20" style={{ width: '100%' }}>
          <HoverEffect items={data?.data?.itineraries}></HoverEffect>
        </div>
      </div>
    </div>
  );
}
