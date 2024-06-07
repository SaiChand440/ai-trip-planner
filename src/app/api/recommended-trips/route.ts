import { itinerarySchema } from "@/app/dbmodels/itinerarySchema";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { desc } from "drizzle-orm";
import { recommendedSchema } from "@/app/dbmodels/recommendedSchema";

const connectionString = process.env.DATABASE_URL;

export const dynamic = "force-dynamic";

export const maxDuration = 60;

const client = postgres(connectionString!, { prepare: false });
const db = drizzle(client);

export async function GET() {

  const output = await db
    .select()
    .from(recommendedSchema)
    .orderBy(desc(recommendedSchema.created_at));

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
