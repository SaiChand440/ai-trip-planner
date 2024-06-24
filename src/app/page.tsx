import { HeroText } from "@/components/customcomponents/HeroText";
import { CardStack } from "@/components/ui/CardStack";
import HomeSection2 from "@/components/customcomponents/HomeSection2";
import singapore from "../../public/images/hero_section/singapore.jpg";
import dubai from "../../public/images/hero_section/dubai.jpg";
import paris from "../../public/images/hero_section/paris.jpg";
import HomeSection3 from "@/components/customcomponents/HomeSection3";
import FooterSection from "@/components/customcomponents/FooterSection";
import HomeSection4 from "@/components/customcomponents/HomeSection4";
import { Navigation } from "@/components/navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="h-auto">
        <div className="w-full dark:bg-black bg-white  dark:bg-dot-white/[0.4] bg-dot-black/[0.4] mt-20">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-2"></div>
          <div className="container relative flex flex-col md:flex-row justify-evenly md:justify-center items-center gap-6 md:gap-0 w-full pt-2 md:pt-5 h-[calc(100vh-5rem)] z-10">
            <HeroText />
            <CardStack items={CARDS} />
          </div>
        </div>
        <HomeSection2 />
        <HomeSection3 />
        <HomeSection4 />
        <FooterSection />
      </div>
    </>
  );
}

const CARDS = [
  {
    id: 0,
    name: "Marina Bay Sands",
    designation: "Singapore",
    content: singapore,
  },
  {
    id: 1,
    name: "Eiffel Tower",
    designation: "Paris",
    content: paris,
  },
  {
    id: 2,
    name: "Burj Khalifa",
    designation: "Dubai",
    content: dubai,
  },
];
