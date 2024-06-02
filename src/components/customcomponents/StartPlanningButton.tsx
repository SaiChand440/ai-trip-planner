"use client"
import React from 'react'
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

export const StartPlanningButton = () => {
    const route = useRouter();
  return (
    <Button
      variant={"default"}
      className="z-10 w-[60%] md:w-full md:w-1/2 my-10 rounded-lg"
      onClick={() => {
        route.push("/new-trip");
      }}
    >
      {"Start Planning"}
    </Button>
  );
}
