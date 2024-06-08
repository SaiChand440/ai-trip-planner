"use client";
import TypewriterComponent from "typewriter-effect";

export const TypeWriter = () => {
  return (
    <TypewriterComponent
      options={{
        strings: ["Budget", "Days", "Activities", "& more"],
        autoStart: true,
        loop: true,
        wrapperClassName: "font-bold lg:text-8xl text-2xl text-indigo-300",
        cursor: "|",
        cursorClassName: "font-thin lg:text-8xl text2xl text-indigo-300",
      }}
    />
  );
};
