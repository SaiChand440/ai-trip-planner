"use client";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { generate } from "../actions";
import { readStreamableValue } from "ai/rsc";
import { Itinerary } from "./components/Itinerary";
import { unstable_noStore as noStore } from "next/cache";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

export default function Page() {
  noStore();
  const searchParams = useSearchParams().get('value');
  const [itineraryData, setItineraryData] = useState<string>("");
  const [streamStatus, setStreamStatus] = useState<string>("");

  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      (async () => {
        const { object, status } = await generate(searchParams!);
        for await (const partialObject of readStreamableValue(object)) {
          if (partialObject) {
            setItineraryData(JSON.stringify(partialObject, null, 2));
          }
        }
        for await (const statusFromStream of readStreamableValue(status)) {
          if (statusFromStream) {
            setStreamStatus(statusFromStream);
          }
        }
      })();
    }
  }, []);

  

  const { data } = useQuery({
    queryKey: ["itinerary", searchParams, itineraryData],
    queryFn: async () => {
      return (
        await fetch(`${window.location.origin}/api/create-trip`, {
          method: "POST",
          body: JSON.stringify({
            searchParams: searchParams,
            itineraryData: itineraryData,
          }),
        })
      ).json();
    },
    refetchOnWindowFocus: false,
    enabled: streamStatus === "completed",
  });

  return (
    <>
      <div className="w-full h-full dark:bg-black bg-white  dark:bg-dot-white/[0.4] bg-dot-black/[0.4] flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="container flex justify-start items-center w-full mt-3 flex-col z-50">
          <Itinerary
            data={data?.data ?? itineraryData}
            outputFromApi={data?.outputFromApi}
          />
        </div>
      </div>
    </>
  );
}
