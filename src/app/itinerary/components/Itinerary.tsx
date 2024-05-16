import { HoverEffect } from "@/components/ui/HoverEffect";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

interface IProps {
  data: any;
}

// const output = {
//   title: "Romantic Getaway in Dubai",
//   welcome: {
//     title: "Welcome to Dubai!",
//     text: "Experience the perfect romantic getaway in the vibrant city of Dubai. Explore the stunning attractions, indulge in luxurious experiences, and create unforgettable memories with your loved one.",
//     image: "https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg",
//   },
//   itineraries: [
//     {
//       title: "Arrival in Dubai",
//       date: "01-03-2024",
//       budget: 80,
//       text: "Arrive in Dubai and check into your luxurious hotel. Spend the day relaxing and enjoying the hotel amenities.",
//       image:
//         "https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg",
//       places: ["Hotel check-in"],
//     },
//     {
//       title: "Exploring Dubai",
//       date: "02-03-2024",
//       budget: 100,
//       text: "Visit the iconic Burj Khalifa and enjoy breathtaking views of the city from the observation deck. Explore the Dubai Mall for shopping and dining.",
//       image:
//         "https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg",
//       places: ["Burj Khalifa", "Dubai Mall"],
//     },
//     {
//       title: "Desert Safari Adventure",
//       date: "03-03-2024",
//       budget: 120,
//       text: "Embark on a thrilling desert safari adventure. Enjoy dune bashing, camel riding, and a traditional Arabian dinner under the stars.",
//       image:
//         "https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg",
//       places: ["Desert Safari"],
//     },
//     {
//       title: "Relaxing Day by the Beach",
//       date: "04-03-2024",
//       budget: 90,
//       text: "Spend a relaxing day by the beach. Enjoy the sun, sand, and sea at one of Dubai's pristine beaches.",
//       image:
//         "https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg",
//       places: ["Beach Day"],
//     },
//     {
//       title: "Cultural Exploration",
//       date: "05-03-2024",
//       budget: 110,
//       text: "Immerse yourself in Dubai's rich culture and heritage. Visit the Dubai Museum, explore the historic Al Fahidi Fort, and wander through the vibrant souks.",
//       image:
//         "https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg",
//       places: ["Dubai Museum", "Al Fahidi Fort", "Dubai Souks"],
//     },
//     {
//       title: "Luxury Dining Experience",
//       date: "06-03-2024",
//       budget: 100,
//       text: "Indulge in a romantic dinner at a luxurious restaurant overlooking the Dubai skyline. Enjoy a culinary experience like no other.",
//       image:
//         "https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg",
//       places: ["Luxury Dinner"],
//     },
//     {
//       title: "Adventure at Atlantis The Palm",
//       date: "07-03-2024",
//       budget: 120,
//       text: "Explore the iconic Atlantis The Palm resort. Visit the Aquaventure Waterpark for thrilling water rides and encounters with marine life.",
//       image:
//         "https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg",
//       places: ["Atlantis The Palm", "Aquaventure Waterpark"],
//     },
//     {
//       title: "Shopping Extravaganza",
//       date: "08-03-2024",
//       budget: 100,
//       text: "Shop till you drop at the Dubai Mall, home to a wide range of international brands and designer stores. Don't miss the Dubai Fountain show in the evening.",
//       image:
//         "https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg",
//       places: ["Dubai Mall", "Dubai Fountain"],
//     },
//     {
//       title: "Dhow Cruise Dinner",
//       date: "09-03-2024",
//       budget: 90,
//       text: "Embark on a romantic dhow cruise along Dubai Marina. Enjoy a sumptuous dinner onboard while taking in the stunning views of the city's skyline.",
//       image:
//         "https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg",
//       places: ["Dhow Cruise Dinner"],
//     },
//     {
//       title: "Departure from Dubai",
//       date: "10-03-2024",
//       budget: 100,
//       text: "Check out from your hotel and bid farewell to Dubai. Take home beautiful memories of your romantic getaway in this enchanting city.",
//       image:
//         "https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg",
//       places: ["Hotel check-out"],
//     },
//   ],
//   closing: {
//     title: "Farewell to Dubai",
//     text: "We hope you enjoyed your romantic getaway in Dubai and created unforgettable memories with your loved one. Until next time!",
//     image: "https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg",
//     places: [
//       "Burj Khalifa",
//       "Desert Safari",
//       "Atlantis The Palm",
//       "Dubai Marina",
//     ],
//   },
// };

export default function Itinerary({ data }: IProps) {

  return (
    <div className="h-max w-full">
      <div className="h-screen z-50">
        <h1 className="font-bold text-neutral-200 text-4xl text-center z-50">
          {data?.data?.title}
        </h1>
        <div className="mt-20">
          <HoverEffect items={data?.data?.itineraries}></HoverEffect>
        </div>
      </div>
    </div>
  );
}
