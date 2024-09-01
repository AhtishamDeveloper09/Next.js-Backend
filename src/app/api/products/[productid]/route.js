import { connectionStr } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request, content) {
  const payload = await request.json();
  const productid = content.params.productid;
  const filter = { _id: productid };
  await mongoose.connect(connectionStr);
  let result = await Product.findOneAndUpdate(filter, payload);
  return NextResponse.json({ result, success: true });
}

export async function GET(request, content) {
  const productid = content.params.productid;
  const filter = { _id: productid };
  await mongoose.connect(connectionStr);
  let result = await Product.findById(filter);
  return NextResponse.json({ result, success: true });
}
