"use client"
import React from 'react'
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

export const StartPlanningButton = () => {
    const route = useRouter();
  return (
    <Button
      variant={"default"}
      className="z-10 w-1/2 my-10"
      onClick={() => {
        route.push("/new-trip");
      }}
    >
      {"Start Planning"}
    </Button>
  );
}
