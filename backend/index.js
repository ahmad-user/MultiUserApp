import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import db from "./config/database.js";
import UserRoute from "./routes/UserRoute.js";
import KaryawanRoute from "./routes/KaryawanRoute.js";
dotenv.config();
import karyawan from "./models/KaryawanModel.js";
import user from "./models/UserModel.js";
const app = express();

try {
  await db.authenticate();
  console.log("Database Connected!");
  await karyawan.sync();
  await user.sync();
} catch (error) {
  console.error(error);
}

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(UserRoute);
app.use(KaryawanRoute);

app.listen(5000, () => console.log("Server running at port 5000"));
