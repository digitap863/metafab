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
    
    const name = formData.get("name");
    const modelNumber = formData.get("modelNumber") || "";
    const category = formData.get("category");
    const subCategory = formData.get("subCategory") || "";
    const rating = formData.get("rating") || "4.5";
    const subtitle = formData.get("subtitle") || "";
    const description = formData.get("description");
    const details = formData.get("details");
    const brochureUrl = formData.get("brochureUrl") || "";
    const brochureFile = formData.get("brochureFile");

    const existingGalleryRaw = formData.get("existingGallery");
    const existingGallery = existingGalleryRaw ? JSON.parse(existingGalleryRaw) : null;

    const featuresRaw = formData.get("features");
    const features = featuresRaw ? JSON.parse(featuresRaw) : undefined;

    const finishesRaw = formData.get("finishes");
    const finishes = finishesRaw ? JSON.parse(finishesRaw) : undefined;

    const file = formData.get("image");
    const galleryFiles = formData.getAll("gallery");

    const product = await Product.findById(id);
    if (!product) {
      return NextResponse.json(
        { success: false, message: "Product not found" },
        { status: 404 }
      );
    }

    // Auto update slug if name or modelNumber changed
    let slug = product.slug;
    if (name && (name !== product.name || modelNumber !== product.modelNumber)) {
      let baseSlug = `${name} ${modelNumber}`
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
      if (!baseSlug) baseSlug = `product-${Date.now()}`;
      
      if (baseSlug !== product.slug) {
        let newSlug = baseSlug;
        let counter = 1;
        while (await Product.findOne({ slug: newSlug, _id: { $ne: id } })) {
          newSlug = `${baseSlug}-${counter}`;
          counter++;
        }
        slug = newSlug;
      }
    }

    // Update main image if new file uploaded
    let imageUrl = product.image;
    if (file && typeof file !== "string" && file.size > 0) {
      await deleteFromCloudinary(product.image);

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const base64Image = `data:${file.type};base64,${buffer.toString("base64")}`;

      const uploadResponse = await cloudinary.uploader.upload(base64Image, {
        folder: "metafab/products",
      });
      imageUrl = uploadResponse.secure_url;
    }

    // Upload New Gallery Files
    const newGalleryUrls = [];
    if (galleryFiles && galleryFiles.length > 0) {
      for (const gFile of galleryFiles) {
        if (gFile && typeof gFile !== "string" && gFile.size > 0) {
          const gBytes = await gFile.arrayBuffer();
          const gBuffer = Buffer.from(gBytes);
          const gBase64 = `data:${gFile.type};base64,${gBuffer.toString("base64")}`;
          const gUpload = await cloudinary.uploader.upload(gBase64, {
            folder: "metafab/products/gallery",
          });
          newGalleryUrls.push(gUpload.secure_url);
        }
      }
    }

    // Combine retained existing gallery URLs + new uploaded URLs
    let finalGallery = product.gallery || [];
    if (existingGallery !== null) {
      finalGallery = [...existingGallery, ...newGalleryUrls];
    } else if (newGalleryUrls.length > 0) {
      finalGallery = [...finalGallery, ...newGalleryUrls];
    }

    if (finalGallery.length === 0) {
      finalGallery.push(imageUrl);
    }

    // Update Brochure
    let brochure = brochureUrl || product.brochure;
    if (brochureFile && typeof brochureFile !== "string" && brochureFile.size > 0) {
      const bBytes = await brochureFile.arrayBuffer();
      const bBuffer = Buffer.from(bBytes);
      const bBase64 = `data:${brochureFile.type};base64,${bBuffer.toString("base64")}`;
      const bUpload = await cloudinary.uploader.upload(bBase64, {
        folder: "metafab/products/brochures",
        resource_type: "raw",
      });
      brochure = bUpload.secure_url;
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        name: name || product.name,
        slug,
        modelNumber: modelNumber !== undefined ? modelNumber : product.modelNumber,
        category: category || product.category,
        subCategory: subCategory !== undefined ? subCategory : product.subCategory,
        rating: rating || product.rating,
        subtitle: subtitle !== undefined ? subtitle : product.subtitle,
        description: description || product.description,
        details: details || product.details,
        features: features !== undefined ? features : product.features,
        finishes: finishes !== undefined ? finishes : product.finishes,
        brochure,
        image: imageUrl,
        gallery: finalGallery,
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
