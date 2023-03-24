const express = require("express");
const router = express.Router();
const {
  default: createCategory,
} = require("../../services/categories/createCategory");
const {
  default: deleteCategory,
} = require("../../services/categories/deleteCategory");
const {
  default: getCategories,
} = require("../../services/categories/getCategories");
const {
  default: getCategory,
} = require("../../services/categories/getCategory");
const {
  default: updateCategory,
} = require("../../services/categories/updateCategory");

// CREATE category
router.post("/category", async (req, res) => {
  createCategory(req, res);
});

// READ all categories
router.get("/categories", async (req, res) => {
  getCategories(req, res);
});

// READ single category
router.get("/category/:id", async (req, res) => {
  getCategory(req, res);
});

// UPDATE category
router.put("/category/:id", async (req, res) => {
  updateCategory(req, res);
});

// DELETE category
router.delete("/category/:id", async (req, res) => {
  deleteCategory(req, res);
});

module.exports = router;
