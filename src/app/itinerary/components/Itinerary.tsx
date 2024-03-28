import Image from 'next/image';
import React from 'react'

interface IProps {
    data: any;
}

export default function Itinerary({data} : IProps) {
    console.log("data", data?.data?.welcome?.image);
  return (
    <>
      <Image
        src={data?.data?.welcome?.image}
        fill={true}
        alt=""
        className="w-full rounded-2xl"
      />
    </>
  );
}
