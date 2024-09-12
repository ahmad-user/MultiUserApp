import express from "express";
import {
  createKaryawan,
  updateKaryawan,
  deleteKaryawan,
  getKaryawan,
  getKaryawanByEmail,
  getKaryawanById,
} from "../controller/Karyawan.js";
import { VerifyRole, VerifyToken } from "../middleware/VerifyToken.js";

const router = express.Router();

router.get("/karyawanPage", VerifyToken, getKaryawanByEmail);

router.get("/karyawan", VerifyToken, VerifyRole(["admin"]), getKaryawan);
router.get("/karyawan/:id", VerifyToken, VerifyRole(["admin"]), getKaryawanById);
router.post("/karyawan", VerifyToken, VerifyRole(["admin"]), createKaryawan);
router.put("/karyawan/:id", VerifyToken, VerifyRole(["admin"]), updateKaryawan);
router.delete(
  "/karyawan/:id",
  VerifyToken,
  VerifyRole(["admin"]),
  deleteKaryawan
);


export default router;