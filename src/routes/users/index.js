const express = require("express");
const router = express.Router();
const { default: createUser } = require("../../services/users/createUser");
const { default: getUser } = require("../../services/users/getUser");
const { default: getUsers } = require("../../services/users/getUsers");
const { default: updateUser } = require("../../services/users/updateUser");
const { default: login } = require("../../services/users/login");

router.get("/users", (req, res) => {
  getUsers(req, res);
});

// GET one user by ID
router.get("/users/:id", (req, res) => {
  getUser(req, res);
});

// POST a new user
router.post("/users", (req, res) => {
  createUser(req, res);
});

// PUT or update an existing user by ID
router.put("/users/:id", (req, res) => {
  updateUser(req, res);
});

router.post("/login", (req, res) => {
  login(req, res);
});

module.exports = router;
