import { jsonb, pgTable, text, timestamp, integer, uuid } from "drizzle-orm/pg-core";

export const itinerarySchema = pgTable("itinerary", {
  user_id: text("user_id"),
  created_at: timestamp("created_at"),
  trip_data: jsonb("trip_data"),
  destination: text("destination"),
  budget: text("budget"),
  start_date: timestamp("start_date",{ withTimezone: true }),
  end_date: timestamp("end_date",{ withTimezone: true }),
  trip_id: uuid("trip_id"),
  user_type: text("user_type"),
});