"use client";
import FooterSection from '@/components/customcomponents/FooterSection';
import { Navigation } from '@/components/navigation';
import { ProductCard } from '@/components/ui/ProductCard';
import { useQuery } from '@tanstack/react-query';
import React from 'react'

export default function Page() {
  const { data, isLoading } = useQuery({
    queryKey: ["mytrips"],
    queryFn: async () => {
      return (
        await fetch(`${window.location.origin}/api/my-trips`, {
          method: "GET",
        })
      ).json();
    },
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return (
      <>
      <Navigation />
        <div className="w-full dark:bg-black bg-white h-screen flex flex-row flex-wrap gap-12 justify-center py-24">
          <div className="loader"></div>
        </div>
      </>
    );
  }

   if (data?.data?.length === 0) {
     return (
       <>
        <Navigation />
         <div className="w-full dark:bg-black bg-white h-screen flex flex-row flex-wrap gap-12 justify-center py-24">
           <h2>Please sign in to save your trips and view them later</h2>
         </div>
       </>
     );
   }


  return (
    <>
    <Navigation />
      <div className="container w-full dark:bg-black bg-white flex flex-row flex-wrap gap-12 justify-center py-24">
        {/* @ts-ignore */}
        {data?.data?.map((trip, index) => (
          <ProductCard data={trip} key={index} />
        ))}
      </div>
      <FooterSection />
    </>
  );
}
