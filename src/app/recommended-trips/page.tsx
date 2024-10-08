"use client";
import FooterSection from "@/components/customcomponents/FooterSection";
import { Navigation } from "@/components/navigation";
import { ProductCard } from "@/components/ui/ProductCard";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function Page() {
  const { data, isLoading } = useQuery({
    queryKey: ["recommended-trips"],
    queryFn: async () => {
      return (
        await fetch(`${window.location.origin}/api/recommended-trips`, {
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
        <div className="container w-full dark:bg-black bg-white flex flex-row flex-wrap gap-12 justify-center py-24">
          <div className="loader"></div>
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
