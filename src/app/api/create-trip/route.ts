import { createClient } from "pexels";
import { itinerarySchema } from "@/app/dbmodels/itinerarySchema";
import { createSupabaseServer } from "@/lib/supabase/server";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

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
  const { destination, budget, start_date, end_date, trip_id, user_type } =
    await request.json();  

  const supabase = createSupabaseServer();
  const userId = (await supabase.auth.getUser()).data.user?.id;
  await db.insert(itinerarySchema).values({
    user_id: userId,
    created_at: new Date(),
    destination: destination,
    budget: budget,
    start_date: new Date(start_date),
    end_date: new Date(end_date),
    trip_id: trip_id,
    user_type: user_type
  });

  return new Response(
    JSON.stringify({
      status: "ok",
      data: trip_id,
    }),
    {
      status: 200,
    }
  );
}
