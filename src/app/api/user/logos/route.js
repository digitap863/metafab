import connect from "@/lib/db/connection";
import Logos from "@/lib/db/models/Logos";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connect();
    const logos = await Logos.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: logos });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Error fetching logos: " + error.message },
      { status: 500 }
    );
  }
};
