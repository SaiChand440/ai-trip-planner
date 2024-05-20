"use client"
import { GlobeLoader } from "@/components/customcomponents/GlobeLoader";
import { useQuery } from "@tanstack/react-query";
import Itinerary from "./components/Itinerary";
import { useRouter, useSearchParams } from "next/navigation";


export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams().get('value')
  const { data, isLoading } = useQuery({
    queryKey: ["itinerary", searchParams], queryFn: async () => {
      return (
          await fetch(`${window.location.origin}/api/create-trip`, {
          method: "POST",
          body: searchParams,
        })
      ).json();
    },
    refetchOnWindowFocus: false,
  });

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
      <div className="w-full h-full dark:bg-black bg-white  dark:bg-dot-white/[0.4] bg-dot-black/[0.4] flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="container flex justify-start items-center w-full mt-3 flex-col z-50">
          <Itinerary data={data} />
        </div>
      </div>
    </>
  );
}

