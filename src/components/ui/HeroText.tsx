import React from 'react'
import { TypeWriter } from '../TypeWriter';
import { Button } from './button';

export const HeroText = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-extrabold text-neutral-200 lg:text-8xl text-6xl z-10 text-center">
        {"Plan your trip based on"}
      </h1>
      <div className="z-10 px-20 py-5">
        <TypeWriter />
      </div>
      <Button variant={'default'} className='z-10 w-1/2 my-10'>{'Start Planning'}</Button>
    </div>
  );
}
