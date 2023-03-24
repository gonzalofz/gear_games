const express = require("express");
const router = express.Router();
const {
  default: createProduct,
} = require("../../services/products/createProduct");
const {
  default: deleteProduct,
} = require("../../services/products/deleteProduct");
const { default: getProduct } = require("../../services/products/getproduct");
const { default: getProducts } = require("../../services/products/getProducts");

// GET all products
router.get("/products", async (req, res) => {
  getProducts(req, res);
});

// GET a single product by ID
router.get("/products/:id", async (req, res) => {
  getProduct(req, res);
});

// CREATE a new product
router.post("/product", async (req, res) => {
  createProduct(req, res);
});

// UPDATE a product by ID
router.put("/products/:id", async (req, res) => {
  updateProduct(req, res);
});

// DELETE a product by ID
router.delete("/products/:id", async (req, res) => {
  deleteProduct(req, res);
});

module.exports = router;
