"use client";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { readStreamableValue } from "ai/rsc";
import { unstable_noStore as noStore } from "next/cache";
import { generate } from "@/app/actions";
import { z } from "zod";
import { Itinerary } from "../components/Itinerary";
import { itineraryResponseSchema } from "@/components/customcomponents/TripPlanForm";
import MapsComponent from "@/components/ui/MapComponent";
import { cn } from "@/lib/utils";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

export default function Page({ params }: { params: { id: string } }) {
  noStore();
  const trip_id = params.id;

  const [itineraryData, setItineraryData] = useState<string>("");
  const [streamStatus, setStreamStatus] = useState<string>("");

  const initialized = useRef(false);

  const { data } = useQuery({
    queryKey: ["itinerary", trip_id],
    queryFn: async () => {
      const url = new URL(`${window.location.origin}/api/get-trip`);
      url.searchParams.append("trip_id", trip_id);

      const response = await fetch(url.toString(), {
        method: "GET",
      });
      return response
        .json()
        .then((data) => data.data as z.infer<typeof itineraryResponseSchema>);
    },
    refetchOnWindowFocus: false,
  });

  const { data: responseData } = useQuery({
    queryKey: ["itinerary", trip_id],
    queryFn: async () => {
      return (
        await fetch(`${window.location.origin}/api/update-trip`, {
          method: "PUT",
          body: JSON.stringify({
            trip_id: trip_id,
            itineraryData: itineraryData,
            destination: data?.destination,
          }),
        })
      ).json();
    },
    refetchOnWindowFocus: false,
    enabled: streamStatus === "completed",
  });

  useEffect(() => {
    if (data && !initialized.current && !data.trip_data) {
      initialized.current = true;
      (async () => {
        const { object, status } = await generate({
          destination: data?.destination,
          date: { from: data?.date?.from, to: data?.date?.to },
          usertype: data?.usertype,
          budget: data?.budget,
        });
        setItineraryData(JSON.stringify(object));
        setStreamStatus(status);
      })();
    }
  }, [data]);
  console.log("data",data)
  console.log("responseData",responseData)
  return (
    !data ?
      (<div className="w-full h-auto dark:bg-black bg-white flex items-center justify-center ">
        <div className="loader"></div>
      </div>) :
      <>
      <div className={cn("w-[60%] h-auto dark:bg-black bg-white flex items-center justify-center")}>
      <div className="flex justify-start items-center w-full flex-col dark:bg-black bg-white">
            <Itinerary
              data={data?.trip_data ?? responseData?.data ?? itineraryData}
              outputFromApi={
                data?.trip_data
                  ? true
                  : responseData?.outputFromApi
                    ? true
                    : false
              }
            />
          </div>
       
          { (data?.trip_data?.destination?.location ?? responseData?.trip_data?.destination?.location) && 
                  <div className="w-[40%]  h-screen flex flex-1" >
                  <MapsComponent data={data ?? responseData  }/>
                </div>}
      
        </div >
      </>
  );
}