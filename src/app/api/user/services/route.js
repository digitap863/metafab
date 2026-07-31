import connect from "@/lib/db/connection";
import Service from "@/lib/db/models/Service";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connect();
    const services = await Service.find().sort({ number: 1, createdAt: 1 });
    // Ensure numerical sorting if number is stored as string
    services.sort((a, b) => parseInt(a.number || "0", 10) - parseInt(b.number || "0", 10));
    return NextResponse.json({ success: true, data: services });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Error fetching services: " + error.message },
      { status: 500 }
    );
  }
};
