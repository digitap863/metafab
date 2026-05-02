import connect from "@/lib/db/connection";
import Project from "@/lib/db/models/Project";
import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

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

export const POST = async (req) => {
  try {
    await connect();
    const formData = await req.formData();
    const file = formData.get("image");
    const title = formData.get("title");
    const location = formData.get("location");
    const year = formData.get("year");

    if (!file || !title || !location || !year) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // Convert file to base64 for Cloudinary upload
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64Image = `data:${file.type};base64,${buffer.toString("base64")}`;

    // Upload to Cloudinary
    const uploadResponse = await cloudinary.uploader.upload(base64Image, {
      folder: "metafab/projects",
    });

    // Save to DB
    const newProject = await Project.create({
      image: uploadResponse.secure_url,
      title,
      location,
      year,
    });

    return NextResponse.json({ success: true, data: newProject });
  } catch (error) {
    console.error("Project upload error:", error);
    return NextResponse.json(
      { success: false, message: "Error uploading project: " + error.message },
      { status: 500 }
    );
  }
};
