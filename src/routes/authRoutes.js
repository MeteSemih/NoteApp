// authRoutes.js
import express from "express";
import {
  register,
  login,
  getUserProfile,
} from "../controllers/authController.js";
import authMiddleware from "../middleware/auth.js"; // authMiddleware'i içe aktarın

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", authMiddleware, getUserProfile); // authMiddleware'i profile rotasına ekleyin

export default router;
