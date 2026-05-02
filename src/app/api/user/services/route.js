import connect from "@/lib/db/connection";
import Service from "@/lib/db/models/Service";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connect();
    const services = await Service.find().sort({ createdAt: 1 }); // Sort by number or creation? Hardcoded had 01, 02...
    return NextResponse.json({ success: true, data: services });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Error fetching services: " + error.message },
      { status: 500 }
    );
  }
};
