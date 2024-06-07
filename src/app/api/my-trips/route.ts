import { itinerarySchema } from "@/app/dbmodels/itinerarySchema";
import { createSupabaseServer } from "@/lib/supabase/server";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { desc, eq } from "drizzle-orm";

const connectionString = process.env.DATABASE_URL;

export const dynamic = "force-dynamic";

export const maxDuration = 60;

const client = postgres(connectionString!, { prepare: false });
const db = drizzle(client);

export async function GET() {

  const supabase = createSupabaseServer();
  const userId = (await supabase.auth.getUser()).data.user?.id!;

  const output = await db
    .select()
    .from(itinerarySchema)
    .where(eq(itinerarySchema.user_id, userId))
    .orderBy(desc(itinerarySchema.created_at));

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
