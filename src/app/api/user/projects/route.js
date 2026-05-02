import connect from "@/lib/db/connection";
import Project from "@/lib/db/models/Project";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connect();
    const projects = await Project.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: projects });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Error fetching projects: " + error.message },
      { status: 500 }
    );
  }
};
