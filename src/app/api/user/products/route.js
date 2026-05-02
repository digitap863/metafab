import connect from "@/lib/db/connection";
import Product from "@/lib/db/models/Products";
import { NextResponse } from "next/server";

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
