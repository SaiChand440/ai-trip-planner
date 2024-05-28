"use client";
import { ProductCard } from '@/components/ui/ProductCard';
import { useQuery } from '@tanstack/react-query';
import React from 'react'

export default function page() {
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
      {data?.data?.map((trip) =>
        <ProductCard title={trip.trip_data.title
        } description={trip.trip_data.welcome.text}
          heroImage={trip.trip_data.welcome.image}
          data={trip} />

      )}
    </div>
  );
}
