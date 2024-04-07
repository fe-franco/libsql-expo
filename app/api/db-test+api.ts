import { db, posts } from "@/lib/db";
import { randomUUID } from "crypto";

export async function GET() {
  const data = await db.query.posts.findMany();

  return new Response(JSON.stringify(data), {
    headers: { "content-type": "application/json" },
  });
}

export async function POST(req: Request) {
  const { message } = await req.json();
  const data = await db.insert(posts).values({
    id: randomUUID(),
    message,
  });

  return new Response(JSON.stringify(data), {
    headers: { "content-type": "application/json" },
  });
}
