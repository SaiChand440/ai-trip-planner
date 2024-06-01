import { itinerarySchema } from "@/app/dbmodels/itinerarySchema";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { formSchema } from "@/components/customcomponents/TripPlanForm";
import { addDays } from "date-fns";

const connectionString = process.env.DATABASE_URL;

export const dynamic = "force-dynamic";

export const maxDuration = 60;

const client = postgres(connectionString!);
const db = drizzle(client);

export const itineraryResponseSchema = z.object({
  destination: z.string().min(2, {
    message: "destination must be at least 2 characters.",
  }),
  date: z
    .object({
      from: z.date(),
      to: z.date(),
    })
    .refine(
      (data) =>
        data.from > addDays(new Date(), -1) &&
        data.to <= addDays(data.from, 10),
      "Start date must be in the future"
    ),
  usertype: z.enum(["solo", "couple", "friends", "family"], {
    required_error: "You need to select the type of traveller you are",
  }),
  budget: z.enum(["<500", "500-1000", "1000-2000", "2000-5000", "5000-10000", ">10000"], {
    required_error: "You need to select the type of traveller you are",
  }),
  trip_data: z.string()
});

export async function GET(request: Request) {
    const url = new URL(request.url);
    const trip_id = url.searchParams.get("trip_id")!;

    try {
      const data = await db
        .select({
          trip_data: itinerarySchema.trip_data,
          destination: itinerarySchema.destination,
          budget: itinerarySchema.budget,
          start_date: itinerarySchema.start_date,
          end_date: itinerarySchema.end_date,
          user_type: itinerarySchema.user_type,
        })
        .from(itinerarySchema)
        .where(eq(itinerarySchema.trip_id, trip_id));

      const output: z.infer<typeof itineraryResponseSchema> = {
        destination: data[0].destination!,
        budget: data[0].budget! as
          | "<500"
          | "500-1000"
          | "1000-2000"
          | "2000-5000"
          | "5000-10000"
          | ">10000",
        date: {
          from: data[0].start_date!,
          to: data[0].end_date!,
        },
        usertype: data[0].user_type! as
          | "solo"
          | "couple"
          | "friends"
          | "family",
        trip_data: data[0].trip_data! as string,
      };

      return new Response(
        JSON.stringify({
          status: "ok",
          data: output,
        }),
        {
          status: 200,
        }
      );
    } catch (error) {
      return new Response(
        JSON.stringify({
          status: "error",
        }),
        {
          status: 500,
        }
      );
    }
}
