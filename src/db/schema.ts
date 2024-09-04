import { sql } from "drizzle-orm";
import {
  boolean,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  email: varchar("email").unique(),
  created_at: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
  updated_at: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`),
  subscribed: boolean("subscribed").default(true),
});

export const feedbacks = pgTable("feedbacks", {
  id: serial("id").primaryKey(),
  message: varchar("message"),
  created_at: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
});

export type Lead = typeof leads.$inferSelect;
export type NewLead = typeof leads.$inferInsert;
export type Feedback = typeof feedbacks.$inferSelect;
export type NewFeedback = typeof feedbacks.$inferInsert;
