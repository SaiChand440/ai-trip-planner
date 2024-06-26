import { createClient } from "pexels";
import { itinerarySchema } from "@/app/dbmodels/itinerarySchema";
import { createSupabaseServer } from "@/lib/supabase/server";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { eq } from "drizzle-orm";
import { Client } from "@googlemaps/google-maps-services-js";

interface IRequest {
  destination: string;
  date: {
    from: Date;
    to: Date;
  };
  usertype: "solo" | "couple" | "friends" | "family";
  budget:
  | "<500"
  | "500-1000"
  | "1000-2000"
  | "2000-5000"
  | "5000-10000"
  | ">10000";
}

const connectionString = process.env.DATABASE_URL;

export const dynamic = "force-dynamic";

export const maxDuration = 60;

const client = postgres(connectionString!, { prepare: false });
const db = drizzle(client);

export async function PUT(request: Request) {
  const { trip_id, itineraryData, destination } = await request.json();

  const client = createClient(process.env.PEXELS_API_KEY!);
  const googleMapsClient = new Client({});
  

  const output = JSON.parse(itineraryData);

  const welcomePhoto = await client.photos.search({
    query: destination,
    per_page: 1,
    orientation: "landscape",
  });

  googleMapsClient.geocode({
    params: {
      address: destination,
      key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    }
  }).then((res) => {
    output.destination =  {location : res.data.results[0].geometry.location,
      place_id: res.data.results[0].place_id,
      boundaries: res.data.results[0].geometry.bounds
    }
  })

  output.welcome.image = (welcomePhoto as any).photos[0].src.original;

  await Promise.all(
    output?.itineraries?.map(async (itinerary: any, index: number) => {
      if (itinerary?.places?.length === 0) {
        return;
      }
      const itineraryPhoto = await client.photos.search({
        query: itinerary.places[0],
        per_page: 1,
        orientation: "landscape",
      });
      output.itineraries[index].image = (
        itineraryPhoto as any
      ).photos[0].src.original;
      itinerary?.places?.forEach((place: string,placesIndex: number) => {
        googleMapsClient
          .geocode({
            params: {
              address: place as string,
              key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
            },
          })
          .then((res) => {
            output.itineraries[index].places[placesIndex] ={ 
              place: place, 
              location: res.data.results[0].geometry.location,
              place_id: res.data.results[0].place_id
            }
          });
      });
    })
  );

  await db.update(itinerarySchema).set({
    trip_data: output,
  }).where(eq(itinerarySchema.trip_id, trip_id));

  return new Response(
    JSON.stringify({
      status: "ok",
      data: output,
      outputFromApi: true,
    }),
    {
      status: 200,
    }
  );
}
