const express = require("express");

const {
  CreateUser,
  getAllUser,
  updateUser,
  login,
  getUserById,
  deleteUser,
} = require("../Controller/userController");
const { jwtMiddleware } = require("../middleware/middleware");
const router = express.Router();

router.post("/register", CreateUser);
router.get("/users", getAllUser);
router.put("/update-user/:id", jwtMiddleware, updateUser);
router.post("/login", login);
router.get("/getuser/:id", getUserById);
router.delete("/delete/:id", jwtMiddleware, deleteUser);

module.exports = router;
