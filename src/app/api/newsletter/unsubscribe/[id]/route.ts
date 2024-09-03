import { db } from "@/db/index";
import { leads } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  _req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const foundLead = await db.query.leads.findFirst({
      where: (users, { eq }) => eq(users.id, Number(params.id)),
    });

    if (!foundLead?.subscribed) {
      throw new Error("Lead is already unsubscribed");
    }

    await db
      .update(leads)
      .set({ subscribed: false })
      .where(eq(leads.id, Number(params.id)));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error });
  }
}
