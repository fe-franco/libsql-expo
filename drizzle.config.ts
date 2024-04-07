import { type Config } from "drizzle-kit";

export default {
  schema: "./server/db/schema",
  driver: "mysql2",
  dbCredentials: {
    uri: process.env.DATABASE_URL ?? "",
  },
  tablesFilter: ["ticket-app_*"],
} satisfies Config;
