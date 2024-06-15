import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import placeholder from '../../../public/images/stock/placeholder.png'
export const HoverEffect = ({
  items,
  className,
  outputFromApi,
}: {
  items: {
    title: string;
    date: string;
    budget: number;
    text: string;
    link: string;
    image: string;
  }[];
  className?: string;
  outputFromApi?: boolean;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className="w-full md:w-4/5 justify-center md:ml-[10%]">
      {items?.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="flex flex-col md:flex-row items-center justify-center">
              {outputFromApi ? (
                <Image alt="image" src={item.image} height={250} width={250} />
              ) : <Image alt="" src={placeholder} height={250} width={250} />
              }
              <div className="flex flex-col pl-6 pr-6 ">
                <div className="flex flex-row" style={{ justifyContent: 'space-between' }}>

                  <CardDescription>{item.date}</CardDescription>
                  <CardDescription>Budget for the day: ${item.budget}</CardDescription>
                </div>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.text}</CardDescription>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-lg md:rounded-2xl h-full w-full p-2 md:p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 ",
        className,
      )}
    >
      <div className="relative z-50">
        <div className="p-2 md:p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-2 md:mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className,
      )}
    >
      {children}
    </p>
  );
};
