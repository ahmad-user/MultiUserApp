import express from "express";
import {
  getUsers,
  getUserByEmail,
  Register,
  Login,
  Logout,
  updateUser,
  deleteUser,
  getUserById
} from "../controller/User.js";

import { VerifyRole, VerifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controller/RefreshToken.js";

const router = express.Router();

router.get("/usersPage", VerifyToken, getUserByEmail);

router.get("/users", VerifyToken, VerifyRole(["admin"]), getUsers);
router.get("/users/:id", VerifyToken, VerifyRole(["admin"]), getUserById);
router.put("/users/:id", VerifyToken, VerifyRole(["admin"]), updateUser);
router.post("/register", Register);
router.post("/login", Login);
router.delete("/users/:id", VerifyToken, VerifyRole(["admin"]), deleteUser);
router.delete("/logout", Logout);
router.get("/token", refreshToken);



export default router;
