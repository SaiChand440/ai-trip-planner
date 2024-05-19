"use client"
import { GlobeLoader } from "@/components/customcomponents/GlobeLoader";
import { useQuery } from "@tanstack/react-query";
import Itinerary from "./components/Itinerary";
import { useValuesStore } from "@/store/valuesStore";

// import { useRouter } from "next/router ";
import { useRouter, useParams, useSearchParams } from "next/navigation";

// const myState = {
//   destination: history?.state?.destination,
//   date: {
//     from: history?.state?.date?.from,
//     to: history?.state?.date?.to,
//   },
//   usertype: history?.state?.usertype,
//   budget: history?.state?.budget
// };


export default function Page() {
  // const { values } = useValuesStore();
  const router = useRouter();
  // const { value } = router.query;
  // const objectPassed = value ? JSON.parse(decodeURIComponent(value)) : null;
  const searchParams = useSearchParams().get('value')
  const { data, isLoading } = useQuery({
    queryKey: ["itinerary", searchParams], queryFn: async () => {
      return (
        await fetch("https://ai-trip-planner-one.vercel.app/api/create-trip", {
          // await fetch("http://localhost:3000/api/create-trip", {
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

