import { connectionStr } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  let data = [];
  let success = true;
  try {
    await mongoose.connect(connectionStr);
    data = await Product.find();
  } catch (error) {
    data = { result: error };
    success = false;
  }
  return NextResponse.json({ result: data, success });
}

export async function POST(request) {
  let payload = await request.json();
  let product = [];

  try {
    await mongoose.connect(connectionStr);
    if (
      !payload.name ||
      !payload.color ||
      !payload.price ||
      !payload.company ||
      !payload.category
    ) {
      return NextResponse.json(
        { result: "required feild not found", success: false },
        { status: 400 }
      );
    }
    product = new Product(payload);
    product = await product.save();
    return NextResponse.json(
      { result: "new user created", success: true },
      { status: 200 }
    );
  } catch (error) {
    product = { success: false };
  }
}
