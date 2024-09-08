import express from "express";
import {
  getUsers,
  getUserByEmail,
  Register,
  Login,
  Logout,
  updateUser,
  deleteUser,
} from "../controller/User.js";
import {
  createKaryawan,
  updateKaryawan,
  deleteKaryawan,
  getKaryawan,
} from "../controller/Karyawan.js";
import { VerifyRole, VerifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controller/RefreshToken.js";

const router = express.Router();

//user
router.get("/usersPage", VerifyToken, getUserByEmail);
// router.get("/karyawan/:email", VerifyToken, getKaryawanByEmail);

//admin
router.get("/users", VerifyToken, VerifyRole(["admin"]), getUsers);
router.delete("/users/:id", VerifyToken, VerifyRole(["admin"]), deleteUser);
router.put("/users/:id", VerifyToken, VerifyRole(["admin"]), updateUser);
router.post("/register", Register);
router.post("/login", Login);
router.delete("/logout", Logout);
router.get("/token", refreshToken);

//karyawan
router.get("/karyawan", VerifyToken, VerifyRole(["admin"]), getKaryawan);
router.post("/karyawan", VerifyToken, VerifyRole(["admin"]), createKaryawan);
router.put("/karyawan/:id", VerifyToken, VerifyRole(["admin"]), updateKaryawan);
router.delete( "/karyawan/:id", VerifyToken, VerifyRole(["admin"]), deleteKaryawan);

export default router;
