"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: StaticImageData;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);

    return () => clearInterval(interval);
  };

  return (
    <div className="relative hidden md:block md:w-1/2 md:h-3/4 ">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute dark:bg-slate-800 bg-white h-96 w-96 md:h-full md:w-full rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <Image
              src={card.content}
              sizes="100vw"
              // Make the image display full width
              style={{
                width: "100%",
                height: "90%",
              }}
              alt=""
              className="w-full rounded-2xl"
            />
            <div>
              <p className="text-neutral-500 font-normal dark:text-white italic">
                {card.name}
              </p>
              <p className="text-neutral-400 font-light dark:text-neutral-200 italic">
                {card.designation}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
