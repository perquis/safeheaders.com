import { db } from "@/db/index";
import { leads } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  try {
    const lead = await db.query.leads.findFirst({
      where: (fields, { eq }) => eq(fields.email, email),
    });

    if (lead) {
      throw new Error("Email already exists");
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false });
  }

  try {
    if (!email) {
      throw new Error("Email is required");
    }

    await db.insert(leads).values({ email }).execute();
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false });
  }

  return NextResponse.json({ success: true });
}
