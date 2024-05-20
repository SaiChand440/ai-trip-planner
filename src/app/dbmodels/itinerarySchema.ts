import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const itinerarySchema = pgTable("itinerary", {
  user_id: text("user_id"),
  created_at: timestamp("created_at"),
  trip_data: text("trip_data"),
});
