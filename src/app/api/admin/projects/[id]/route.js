import connect from "@/lib/db/connection";
import Project from "@/lib/db/models/Project";
import { deleteFromCloudinary } from "@/lib/cloudinary";
import cloudinary from "@/lib/cloudinary";
import { NextResponse } from "next/server";

export const PUT = async (req, { params }) => {
  try {
    await connect();
    const { id } = await params;
    const formData = await req.formData();
    
    const title = formData.get("title");
    const location = formData.get("location");
    const year = formData.get("year");
    const file = formData.get("image"); // This might be null if not updating image

    const project = await Project.findById(id);
    if (!project) {
      return NextResponse.json(
        { success: false, message: "Project not found" },
        { status: 404 }
      );
    }

    let imageUrl = project.image;

    if (file && typeof file !== "string") {
      // New image file provided, upload it and delete the old one
      
      // Delete old from Cloudinary
      await deleteFromCloudinary(project.image);

      // Upload new to Cloudinary
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const base64Image = `data:${file.type};base64,${buffer.toString("base64")}`;

      const uploadResponse = await cloudinary.uploader.upload(base64Image, {
        folder: "metafab/projects",
      });
      imageUrl = uploadResponse.secure_url;
    }

    // Update DB record
    const updatedProject = await Project.findByIdAndUpdate(
      id,
      {
        title: title || project.title,
        location: location || project.location,
        year: year || project.year,
        image: imageUrl,
      },
      { new: true }
    );

    return NextResponse.json({ success: true, data: updatedProject });
  } catch (error) {
    console.error("Project update error:", error);
    return NextResponse.json(
      { success: false, message: "Error updating project: " + error.message },
      { status: 500 }
    );
  }
};

export const DELETE = async (req, { params }) => {
  try {
    await connect();
    const { id } = await params;

    const project = await Project.findById(id);
    if (!project) {
      return NextResponse.json(
        { success: false, message: "Project not found" },
        { status: 404 }
      );
    }

    // Delete image from Cloudinary
    await deleteFromCloudinary(project.image);

    // Delete from DB
    await Project.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    console.error("Project deletion error:", error);
    return NextResponse.json(
      { success: false, message: "Error deleting project: " + error.message },
      { status: 500 }
    );
  }
};
