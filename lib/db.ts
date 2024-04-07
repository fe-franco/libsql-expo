import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { text, sqliteTable } from "drizzle-orm/sqlite-core";

export const posts = sqliteTable("posts", {
  id: text("id").notNull().primaryKey(),
  message: text("message").notNull(),
});

export const schema = {
  posts,
};

const client = createClient({
  url: process.env.DATABASE_URL!,
  authToken: process.env.DATABASE_TOKEN!,
});

export const db = drizzle(client, {
  schema,
});
