import express from "express";
import Product from "../models/productModel";

const router = express.Router();

router.get("/", async (req, res) => {
  // send list of products to user
  const products = await Product.find({});
  res.send(products);
});

router.post("/", async (req, res) => {
  const product = new Product({
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    brand: req.body.brand,
    image: req.body.image,
    description: req.body.description,
    rating: req.body.rating,
    numReviews: req.body.numReviews,
    stockCount: req.body.stockCount,
  });
  const newProduct = await Product.save();
  if (newProduct) {
    res.status(201).send({ msg: "New product created", data: newProduct });
  }
  return res.status(500).send({ msg: "Error in creating product." });
});

export default router;
