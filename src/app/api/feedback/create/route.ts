import { db } from "@/db/index";
import { feedbacks } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  try {
    if (!message) {
      throw new Error("The message is required");
    }

    await db.insert(feedbacks).values({ message }).execute();
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false });
  }

  return NextResponse.json({ success: true });
}
