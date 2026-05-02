import connect from "@/lib/db/connection";
import Logos from "@/lib/db/models/Logos";
import { deleteFromCloudinary } from "@/lib/cloudinary";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
  try {
    await connect();
    const { id } = await params;

    const logoRecord = await Logos.findById(id);
    if (!logoRecord) {
      return NextResponse.json(
        { success: false, message: "Logo not found" },
        { status: 404 }
      );
    }

    // Delete from Cloudinary
    const deletedFromCloudinary = await deleteFromCloudinary(logoRecord.logo);
    
    if (!deletedFromCloudinary) {
        console.warn("Could not delete image from Cloudinary, continuing with DB deletion.");
    }

    // Delete from DB
    await Logos.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "Logo deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Error deleting logo: " + error.message },
      { status: 500 }
    );
  }
};
