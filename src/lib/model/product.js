import mongoose from "mongoose";

const productModel = new mongoose.Schema({
  name: String,
  color: String,
  price: String,
  company: String,
  category: String,
});
export const Product = mongoose.models.products || mongoose.model("products", productModel);