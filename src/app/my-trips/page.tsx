"use client";
import { ProductCard } from '@/components/ui/ProductCard';
import { useQuery } from '@tanstack/react-query';
import React from 'react'

export default function Page() {
  const { data } = useQuery({
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
  return (
    <div className="w-full dark:bg-black bg-white  dark:bg-dot-white/[0.4] bg-dot-black/[0.4]" style={{ flexDirection: 'row', display: 'flex', flexWrap: 'wrap', gap: 50, justifyContent: 'center' }}>
      {/* @ts-ignore */}
      {data?.data?.map((trip, index) =>
        <ProductCard
          key={index}
          data={trip} />

      )}
    </div>
  );
}
