import connect from "@/lib/db/connection";
import Service from "@/lib/db/models/Service";
import { deleteFromCloudinary } from "@/lib/cloudinary";
import cloudinary from "@/lib/cloudinary";
import { NextResponse } from "next/server";

export const PUT = async (req, { params }) => {
  try {
    await connect();
    const { id } = await params;
    const formData = await req.formData();
    
    const number = formData.get("number");
    const title = formData.get("title");
    const description = formData.get("description");
    const features = formData.getAll("features");
    const file = formData.get("image");

    const service = await Service.findById(id);
    if (!service) {
      return NextResponse.json(
        { success: false, message: "Service not found" },
        { status: 404 }
      );
    }

    let imageUrl = service.image;

    if (file && typeof file !== "string") {
      // New image file provided
      await deleteFromCloudinary(service.image);

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const base64Image = `data:${file.type};base64,${buffer.toString("base64")}`;

      const uploadResponse = await cloudinary.uploader.upload(base64Image, {
        folder: "metafab/services",
      });
      imageUrl = uploadResponse.secure_url;
    }

    // Update DB record
    const updatedService = await Service.findByIdAndUpdate(
      id,
      {
        number: number || service.number,
        title: title || service.title,
        description: description || service.description,
        features: features.length > 0 ? features : service.features,
        image: imageUrl,
      },
      { new: true }
    );

    return NextResponse.json({ success: true, data: updatedService });
  } catch (error) {
    console.error("Service update error:", error);
    return NextResponse.json(
      { success: false, message: "Error updating service: " + error.message },
      { status: 500 }
    );
  }
};

export const DELETE = async (req, { params }) => {
  try {
    await connect();
    const { id } = await params;

    const service = await Service.findById(id);
    if (!service) {
      return NextResponse.json(
        { success: false, message: "Service not found" },
        { status: 404 }
      );
    }

    // Delete image from Cloudinary
    await deleteFromCloudinary(service.image);

    // Delete from DB
    await Service.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "Service deleted successfully",
    });
  } catch (error) {
    console.error("Service deletion error:", error);
    return NextResponse.json(
      { success: false, message: "Error deleting service: " + error.message },
      { status: 500 }
    );
  }
};
