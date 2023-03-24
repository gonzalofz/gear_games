const express = require("express");
const pool = require("../../database");
const { default: createBrand } = require("../../services/brands/createBrand");
const { default: deleteBrand } = require("../../services/brands/deleteBrand");
const { default: getBrand } = require("../../services/brands/getbrand");
const { default: getBrands } = require("../../services/brands/getBrands");
const { default: updateBrand } = require("../../services/brands/updateBrand");
const router = express.Router();

// CREATE brand
router.post("/brand", async (req, res) => {
  createBrand(req, res);
});

// READ all brands
router.get("/brands", async (req, res) => {
  getBrands(req, res);
});

// READ single brand
router.get("/brand/:id", async (req, res) => {
  getBrand(req, res);
});

// UPDATE brand
router.put("/brand/:id", async (req, res) => {
  updateBrand(req, res);
});

// DELETE brand
router.delete("/brand/:id", async (req, res) => {
  deleteBrand(req, res);
});

module.exports = router;
