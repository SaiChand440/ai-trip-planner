"use client";
import React from "react";

import Image from "next/image";
import { BackgroundGradient } from "./BackgroundGardient";
//@ts-ignore
export function ProductCard({ data }) {
    return (
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <div style={{ height: 345, width: 300 }}>

                <Image
                    src={data.trip_data.welcome.image}
                    alt={data.trip_data.title}
                    height="400"
                    width="400"
                    className="object-contain"
                />
                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {data.trip_data.title}
                </p>

                <p className="text-sm text-neutral-600 dark:text-neutral-400" >
                    {data.trip_data.welcome.text.substring(0, 130)}...
                </p>
                {/* <button className="rounded-full text-white  space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800" style={{ paddingTop: 5, paddingBottom: 5, paddingLeft: 8, paddingRight: 8 }}>
                <span>Preview</span>
            </button> */}
                <div style={{ marginTop: 3 }}>

                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white" >
                        {data.trip_data.itineraries.length} days itinerary
                    </span>
                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white ml-2">
                        $100
                    </span>
                </div>
            </div>
        </BackgroundGradient>
    );
}