"use client";
import { TripPlanForm } from "@/components/customcomponents/TripPlanForm";
import { useLoadScript } from "@react-google-maps/api";
import { useQuery } from "@tanstack/react-query";

export default function Page() {
  
    // const {isLoading, } = useQuery({
    //     ['itinerary'],
    //     queryFn: getItinerary();
    // })

//   if (!isLoaded) {
//     return (
//       <>
//         <div className="h-[calc(100vh-5rem)] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.4] bg-dot-black/[0.4] flex items-center justify-center">
//           <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
//           <div className="container flex justify-center items-start w-full h-[calc(100vh-5rem)] mt-3">
//             <h3 className="text-center text-6xl opacity-90 z-10 font-bold leading-snug">
//               Loading...
//             </h3>
//           </div>
//         </div>
//       </>
//     );
//   }
  return (
    <>
      <div className="h-[calc(100vh-5rem)] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.4] bg-dot-black/[0.4] flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="container flex justify-start items-center w-full h-[calc(100vh-5rem)]  mt-3 flex-col">
          <h3 className="text-center text-6xl opacity-90 z-10 font-bold leading-snu pb-12">
            Let{`'`}s plan your{" "}
            <span className="text-indigo-300"> next trip </span>
          </h3>
          <TripPlanForm />
        </div>
      </div>
    </>
  );
}
