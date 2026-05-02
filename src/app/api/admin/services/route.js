import connect from "@/lib/db/connection";
import Service from "@/lib/db/models/Service";
import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export const GET = async () => {
  try {
    await connect();
    const services = await Service.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: services });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Error fetching services: " + error.message },
      { status: 500 }
    );
  }
};

export const POST = async (req) => {
  try {
    await connect();
    const formData = await req.formData();
    const file = formData.get("image");
    const number = formData.get("number");
    const title = formData.get("title");
    const description = formData.get("description");
    const features = formData.getAll("features");

    if (!file || !number || !title || !description) {
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
      folder: "metafab/services",
    });

    // Save to DB
    const newService = await Service.create({
      image: uploadResponse.secure_url,
      number,
      title,
      description,
      features,
    });

    return NextResponse.json({ success: true, data: newService });
  } catch (error) {
    console.error("Service upload error:", error);
    return NextResponse.json(
      { success: false, message: "Error uploading service: " + error.message },
      { status: 500 }
    );
  }
};
