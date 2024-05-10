import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { profilesSchema } from "../dbmodels/profilesSchema";

export const connectionString = process.env.DATABASE_URL;

const client = postgres(connectionString!,{ prepare : false });
const db = drizzle(client);

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET() {
  const allUsers = await db.select().from(profilesSchema);
  
  return Response.json(allUsers, {
    status: 200,
    statusText: "ok",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
