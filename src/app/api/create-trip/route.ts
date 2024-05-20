import { createClient } from "pexels";
import { itinerarySchema } from "@/app/dbmodels/itinerarySchema";
import { createSupabaseServer } from "@/lib/supabase/server";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { generateObject } from "ai";
import { google } from "@ai-sdk/google";
import outputSchema from "@/tools/outputSchema";

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

export async function POST(request: Request) {
  const {
    destination,
    date: { from, to },
    usertype,
    budget,
  }: IRequest = await request.json();

  if (!destination || !from || !to || !usertype || !budget) {
    return Response.json(
      { success: false, error: "some of the fields are missing" },
      {
        status: 400,
        statusText: "fail",
      }
    );
  }

  let system_prompt = `You are a helpful travel planner specialized in ${destination}. Create an itinerary starting from ${from} and ending on ${to}, including activities for all days along with start and end date. This is a ${usertype} trip. The total budget of the trip is ${budget}, split the budget into daily expenses based on the itinerary.`;

  const response = await generateObject({
    model: google("models/gemini-1.5-flash-latest"),
    schema: outputSchema,
    system: system_prompt,
    prompt: `Create an itinerary to ${destination}`,
  });

  const output = response.object;

  const client = createClient(process.env.PEXELS_API_KEY!);

  const welcomePhoto = await client.photos.search({
    query: destination,
    per_page: 1,
    orientation: "landscape",
  });

  output.welcome.image = (welcomePhoto as any).photos[0].src.original;

  await Promise.all(
    output?.itineraries.map(async (itinerary: any, index: number) => {
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
  await db.insert(itinerarySchema).values({
    user_id: "3d1017e9-afcc-4774-8fa5-4cc6f90de98b",
    created_at: new Date(),
    trip_data: output,
  });

  return new Response(
    JSON.stringify({
      status: "ok",
      data: output,
    }),
    {
      status: 200,
    }
  );
}
