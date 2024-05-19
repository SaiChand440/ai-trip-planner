"use client"
import { TripPlanForm } from '@/components/customcomponents/TripPlanForm';
import { useLoadScript } from '@react-google-maps/api'; 

export default function Page() {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '',
    libraries: ["places"]
  });

  if (!isLoaded) {
    return (
      <>
        <div className="h-[calc(100vh-5rem)] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.4] bg-dot-black/[0.4] flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className="container flex justify-center items-start w-full h-[calc(100vh-5rem)] mt-3">
            <h3 className="text-center text-6xl opacity-90 z-10 font-bold leading-snug">
              Loading...
            </h3>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="h-[calc(100vh-5rem)] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.4] bg-dot-black/[0.4] flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="container flex justify-start items-center w-full h-[calc(100vh-5rem)] mt-5 md:mt-3 flex-col">
          <p className="text-center lg:text-6xl md:text-4xl text-[28px] opacity-90 z-10 font-bold leading-snu lg:pb-12 md:pb-8 pb-3">
            Let{`'`}s plan your <span className="text-indigo-300"> next trip </span>
          </p>
          <TripPlanForm />
        </div>
      </div>
    </>
  );
}
