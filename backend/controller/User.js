import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: ["id", "email", "role"],
    });
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};
  export const getUserById = async (req, res) => {
    const { id } = req.params;

    try {
      const user = await Users.findOne({ where: { id } });

      if (!user) return res.status(404).json({ msg: "User not found" });

      res.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ msg: "Server error" });
    }
  };

export const getUserByEmail = async (req, res) => {
  try {
    const email = req.email;

    const user = await Users.findOne({
      where: { email },
      attributes: ["id", "email"],
    });
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

export const Register = async (req, res) => {
  const { email, role, password, confirm_password } = req.body;
  if (password != confirm_password)
    return res.status(400).json({ msg: "password tidak sesuai" });
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);

  try {
    await Users.create({
      email: email,
      password: hashPassword,
      role: role,
    });
    res.json({ msg: "Register Berhasil" });
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { email, password, role } = req.body;

  try {
    const user = await Users.findOne({
      where: {
        id: id,
      },
    });

    if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });

    let hashPassword;
    if (password) {
      const salt = await bcrypt.genSalt();
      hashPassword = await bcrypt.hash(password, salt);
    }

    await Users.update(
      {
        email: email || user.email,
        password: hashPassword || user.password,
        role: role || user.role,
      },
      {
        where: {
          id: id,
        },
      }
    );

    res.json({ msg: "User berhasil diupdate" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Terjadi kesalahan pada server" });
  }
};


export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await Users.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await user.destroy();

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const Login = async (req, res) => {
  try {
    const user = await Users.findAll({
      where: {
        email: req.body.email,
      },
    });
    const match = await bcrypt.compare(req.body.password, user[0].password);
    if (!match) return res.status(400).json({ msg: "Wrong Password" });
    const userId = user[0].id;
    const email = user[0].email;
    const role = user[0].role;
    const accessToken = jwt.sign(
      { userId, email, role },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "60s",
      }
    );
    const refreshToken = jwt.sign(
      { userId, email, role },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );
    await Users.update(
      { refresh_token: refreshToken },
      {
        where: {
          id: userId,
        },
      }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({ accessToken });
  } catch (error) {
    res.status(404).json({ msg: "Email tidak ditemukan" });
  }
};

export const Logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);

  const user = await Users.findAll({
    where: {
      refresh_token: refreshToken,
    },
  });
  if (!user[0]) return res.sendStatus(204);
  const userId = user[0].id;
  await Users.update(
    { refresh_token: null },
    {
      where: {
        id: userId,
      },
    }
  );
  res.clearCookie("refreshToken");
  return res.sendStatus(200);
};
