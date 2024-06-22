"use client";
import React, { useState } from "react";

import Image from "next/image";
import { BackgroundGradient } from "./BackgroundGardient";
import { useRouter } from "next/navigation";
//@ts-ignore
export function ProductCard({ data }) {
    const route = useRouter();
    const [isHovered, setIsHovered] = useState(false)
    if (!data.trip_data) {
        return null;
    }
    return (
        <BackgroundGradient className="rounded-[22px] bg-white dark:bg-zinc-900">
            <div style={{ height: 378, padding: 5, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} onClick={() => {
                route.push(`/itinerary/${encodeURIComponent(data.trip_id)}`);

            }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>

                <Image
                    src={data.trip_data.welcome.image}
                    alt={data.trip_data.title}
                    height={200}
                    width={300}
                    className="rounded-[24px] p-2 object-cover w-full h-[60%]"
                    style={{ padding: isHovered ? 1 : 5 }}
                    unoptimized
                />
                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200" style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                }}>
                    {data.trip_data.title.substring(0, 30)}..
                </p>

                <p className="text-sm text-neutral-600 dark:text-neutral-400" style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}>
                    {data.trip_data.welcome.text.substring(0, 120)}...
                </p>
                <div style={{ marginTop: 1 }}>

                    <span className="bg-zinc-700 rounded-[22px] text-[0.6rem] px-2 py-1 text-white" >
                        {data?.trip_data?.itineraries?.length} days itinerary
                    </span>
                </div>
            </div>
        </BackgroundGradient>
    );
}
