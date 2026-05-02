import connect from "@/lib/db/connection";
import Product from "@/lib/db/models/Products";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    await connect();
    const { slug } = await params;
    const product = await Product.findOne({ slug });
    
    if (!product) {
      return NextResponse.json(
        { success: false, message: "Product not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, data: product });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Error fetching product: " + error.message },
      { status: 500 }
    );
  }
};
