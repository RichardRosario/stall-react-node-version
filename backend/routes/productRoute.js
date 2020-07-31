import express from "express";
import Product from "../models/productModel";
import { isAdmin, isAuth } from "../utils";

const router = express.Router();

router.get("/", async (req, res) => {
  // send list of products to user
  const products = await Product.find({});
  res.send(products);
});

// get single product
router.get("/:id", async (req, res) => {
  const product = await Product.findOne({ _id: req.params.id });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
});

// api to create a product
router.post("/", isAdmin, isAuth, async (req, res) => {
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
  const newProduct = await product.save();
  if (newProduct) {
    return res
      .status(201)
      .send({ msg: "New product created", data: newProduct });
  }
  return res.status(500).send({ msg: "Error in creating product." });
});

// product update
router.put("/:id", isAdmin, isAuth, async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findById({ _id: productId });
  if (product) {
    product.name = req.body.name;
    product.category = req.body.category;
    product.price = req.body.price;
    product.brand = req.body.brand;
    product.image = req.body.image;
    product.description = req.body.description;
    product.stockCount = req.body.stockCount;

    const updateProduct = await product.save();
    if (updateProduct) {
      return res
        .status(200)
        .send({ msg: "New product update", data: updateProduct });
    }
  }
  return res.status(500).send({ msg: "Error in updating product." });
});

// api to delete product
router.delete("/:id", isAdmin, isAuth, async (req, res) => {
  const deletedProduct = await Product.findById(req.params.id);
  if (deletedProduct) {
    await deletedProduct.remove();
    res.send({ message: "Product successfully deleted" });
  } else {
    res.send({ message: "Error in deleting product" });
  }
});

export default router;
