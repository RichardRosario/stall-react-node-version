import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true, default: 0 },
  brand: { type: String, required: false },
  rating: { type: Number, required: false, default: 0 },
  numReviews: { type: Number, required: false, default: 0 },
  description: { type: String, required: true },
  stockCount: { type: Number, required: true, default: 0 },
});

const productModel = mongoose.model("Product", productSchema);

export default productModel;
