import connect from "@/lib/db/connection";
import Logos from "@/lib/db/models/Logos";
import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

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

export const POST = async (req) => {
  try {
    await connect();
    const formData = await req.formData();
    const file = formData.get("logo");

    if (!file) {
      return NextResponse.json(
        { success: false, message: "No file uploaded" },
        { status: 400 }
      );
    }

    // Convert file to base64 for Cloudinary upload
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64Image = `data:${file.type};base64,${buffer.toString("base64")}`;

    // Upload to Cloudinary
    const uploadResponse = await cloudinary.uploader.upload(base64Image, {
      folder: "metafab/logos",
    });

    // Save to DB
    const newLogo = await Logos.create({
      logo: uploadResponse.secure_url,
    });

    return NextResponse.json({ success: true, data: newLogo });
  } catch (error) {
    console.error("Logo upload error:", error);
    return NextResponse.json(
      { success: false, message: "Error uploading logo: " + error.message },
      { status: 500 }
    );
  }
};
