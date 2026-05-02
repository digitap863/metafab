import connect from "@/lib/db/connection";
import Product from "@/lib/db/models/Products";
import { deleteFromCloudinary } from "@/lib/cloudinary";
import cloudinary from "@/lib/cloudinary";
import { NextResponse } from "next/server";

export const PUT = async (req, { params }) => {
  try {
    await connect();
    const { id } = await params;
    const formData = await req.formData();
    
    const slug = formData.get("slug");
    const name = formData.get("name");
    const price = formData.get("price");
    const description = formData.get("description");
    const category = formData.get("category");
    const details = formData.get("details");
    const file = formData.get("image");

    const product = await Product.findById(id);
    if (!product) {
      return NextResponse.json(
        { success: false, message: "Product not found" },
        { status: 404 }
      );
    }

    // Check if new slug is unique
    if (slug && slug !== product.slug) {
        const existingProduct = await Product.findOne({ slug });
        if (existingProduct) {
            return NextResponse.json(
                { success: false, message: "Slug already exists. Please use a unique slug." },
                { status: 400 }
            );
        }
    }

    let imageUrl = product.image;

    if (file && typeof file !== "string") {
      // New image file provided
      await deleteFromCloudinary(product.image);

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const base64Image = `data:${file.type};base64,${buffer.toString("base64")}`;

      const uploadResponse = await cloudinary.uploader.upload(base64Image, {
        folder: "metafab/products",
      });
      imageUrl = uploadResponse.secure_url;
    }

    // Update DB record
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        slug: slug || product.slug,
        name: name || product.name,
        price: price || product.price,
        description: description || product.description,
        category: category || product.category,
        details: details || product.details,
        image: imageUrl,
      },
      { new: true }
    );

    return NextResponse.json({ success: true, data: updatedProduct });
  } catch (error) {
    console.error("Product update error:", error);
    return NextResponse.json(
      { success: false, message: "Error updating product: " + error.message },
      { status: 500 }
    );
  }
};

export const DELETE = async (req, { params }) => {
  try {
    await connect();
    const { id } = await params;

    const product = await Product.findById(id);
    if (!product) {
      return NextResponse.json(
        { success: false, message: "Product not found" },
        { status: 404 }
      );
    }

    // Delete image from Cloudinary
    await deleteFromCloudinary(product.image);

    // Delete from DB
    await Product.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error("Product deletion error:", error);
    return NextResponse.json(
      { success: false, message: "Error deleting product: " + error.message },
      { status: 500 }
    );
  }
};
