import express from "express";
import {
  getUsers,
  Register,
  Login,
  Logout,
  updateUser,
  getUserById,
  deleteUser,
} from "../controller/User.js";
import {
  createKaryawan,
  updateKaryawan,
  deleteKaryawan,
  getKaryawan,
  getKaryawanById,
} from "../controller/Karyawan.js";
import { VerifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controller/RefreshToken.js";

const router = express.Router();

//user
router.get("/users", VerifyToken, getUsers);
router.get("/users/:id", VerifyToken, getUserById);
router.delete("/users/:id", VerifyToken, deleteUser);
router.put("/users/:id", VerifyToken, updateUser);
router.post("/register", Register);
router.post("/login", Login);
router.delete("/logout", Logout);
router.get("/token", refreshToken);

//karyawan
router.get("/karyawan", VerifyToken, getKaryawan);
router.get("/karyawan/:id", VerifyToken, getKaryawanById);
router.post("/karyawan", VerifyToken, createKaryawan);
router.put("/karyawan/:id", VerifyToken, updateKaryawan);
router.delete("/karyawan/:id", VerifyToken, deleteKaryawan);

export default router;
