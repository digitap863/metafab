import connect from "@/lib/db/connection";
import Product from "@/lib/db/models/Products";
import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

const createUniqueSlug = async (name, modelNumber) => {
  let baseSlug = `${name} ${modelNumber}`
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

  if (!baseSlug) baseSlug = `product-${Date.now()}`;

  let slug = baseSlug;
  let counter = 1;
  while (await Product.findOne({ slug })) {
    slug = `${baseSlug}-${counter}`;
    counter++;
  }
  return slug;
};

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
    
    const name = formData.get("name");
    const modelNumber = formData.get("modelNumber") || "";
    const category = formData.get("category");
    const subCategory = formData.get("subCategory") || "";
    const price = formData.get("price");
    const rating = formData.get("rating") || "4.5";
    const subtitle = formData.get("subtitle") || "";
    const description = formData.get("description");
    const details = formData.get("details");
    const brochureUrl = formData.get("brochureUrl") || "";
    const brochureFile = formData.get("brochureFile");

    const existingGalleryRaw = formData.get("existingGallery");
    const existingGallery = existingGalleryRaw ? JSON.parse(existingGalleryRaw) : [];

    const featuresRaw = formData.get("features");
    const features = featuresRaw ? JSON.parse(featuresRaw) : [];

    const finishesRaw = formData.get("finishes");
    const finishes = finishesRaw ? JSON.parse(finishesRaw) : [];

    const file = formData.get("image");
    const galleryFiles = formData.getAll("gallery");

    if (!file || !name || !price || !description || !details || !category) {
      return NextResponse.json(
        { success: false, message: "Required fields (Name, Price, Category, Description, Details, Main Image) are missing." },
        { status: 400 }
      );
    }

    const slug = await createUniqueSlug(name, modelNumber);

    // Upload Main Image
    const mainBytes = await file.arrayBuffer();
    const mainBuffer = Buffer.from(mainBytes);
    const mainBase64 = `data:${file.type};base64,${mainBuffer.toString("base64")}`;

    const mainUpload = await cloudinary.uploader.upload(mainBase64, {
      folder: "metafab/products",
    });
    const mainImageUrl = mainUpload.secure_url;

    // Upload New Gallery Images
    const uploadedGalleryUrls = [];
    if (galleryFiles && galleryFiles.length > 0) {
      for (const gFile of galleryFiles) {
        if (gFile && typeof gFile !== "string" && gFile.size > 0) {
          const gBytes = await gFile.arrayBuffer();
          const gBuffer = Buffer.from(gBytes);
          const gBase64 = `data:${gFile.type};base64,${gBuffer.toString("base64")}`;
          const gUpload = await cloudinary.uploader.upload(gBase64, {
            folder: "metafab/products/gallery",
          });
          uploadedGalleryUrls.push(gUpload.secure_url);
        }
      }
    }

    // Combine existing URLs + new uploaded URLs
    const finalGallery = [...existingGallery, ...uploadedGalleryUrls];
    if (finalGallery.length === 0) {
      finalGallery.push(mainImageUrl);
    }

    // Upload Brochure PDF if file provided
    let brochure = brochureUrl;
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

    const newProduct = await Product.create({
      name,
      slug,
      modelNumber,
      category,
      subCategory,
      price,
      rating,
      subtitle,
      description,
      details,
      features,
      finishes,
      brochure,
      image: mainImageUrl,
      gallery: finalGallery,
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
