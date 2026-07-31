import connect from "@/lib/db/connection";
import Product from "@/lib/db/models/Products";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connect();
    const products = await Product.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: products });
  } catch (error) {
    console.error("Error in GET /api/user/products:", error.message);
    return NextResponse.json(
      { success: false, data: [], message: error.message },
      { status: 200 }
    );
  }
};
