import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const itinerarySchema = pgTable("itinerary", {
  id: text("id"),
  created_at: timestamp("created_at"),
  trip_data: text("trip_data"),
});
