import connect from "@/lib/db/connection";
import Product from "@/lib/db/models/Products";
import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export const GET = async () => {
  try {
    await connect();
    const products = await Product.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: products });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Error fetching products: " + error.message },
      { status: 500 }
    );
  }
};

export const POST = async (req) => {
  try {
    await connect();
    const formData = await req.formData();
    
    const slug = formData.get("slug");
    const name = formData.get("name");
    const price = formData.get("price");
    const description = formData.get("description");
    const category = formData.get("category");
    const details = formData.get("details");
    const file = formData.get("image");

    if (!file || !slug || !name || !price || !description || !details || !category) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // Check if slug already exists
    const existingProduct = await Product.findOne({ slug });
    if (existingProduct) {
      return NextResponse.json(
        { success: false, message: "Slug already exists. Please use a unique slug." },
        { status: 400 }
      );
    }

    // Convert file to base64 for Cloudinary upload
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64Image = `data:${file.type};base64,${buffer.toString("base64")}`;

    // Upload to Cloudinary
    const uploadResponse = await cloudinary.uploader.upload(base64Image, {
      folder: "metafab/products",
    });

    // Save to DB
    const newProduct = await Product.create({
      image: uploadResponse.secure_url,
      slug,
      name,
      price,
      description,
      category,
      details,
    });

    return NextResponse.json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Product upload error:", error);
    return NextResponse.json(
      { success: false, message: "Error uploading product: " + error.message },
      { status: 500 }
    );
  }
};
