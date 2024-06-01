import { createClient } from "pexels";
import { itinerarySchema } from "@/app/dbmodels/itinerarySchema";
import { createSupabaseServer } from "@/lib/supabase/server";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { eq } from "drizzle-orm";

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

  const output = JSON.parse(itineraryData);

  const welcomePhoto = await client.photos.search({
    query: destination,
    per_page: 1,
    orientation: "landscape",
  });

  output.welcome.image = (welcomePhoto as any).photos[0].src.original;

  await Promise.all(
    output?.itineraries.map(async (itinerary: any, index: number) => {
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
    })
  );

  const supabase = createSupabaseServer();
  const userId = (await supabase.auth.getUser()).data.user?.id;

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
