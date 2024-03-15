import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const profilesSchema = pgTable("profiles", {
  id: text("id").primaryKey(),
  fullName: text("full_name"),
  email: text("email"),
  updated_at: timestamp("updated_at"),
  avatar_url: text("avatar_url")
});
