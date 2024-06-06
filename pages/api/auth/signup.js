import connectDB from "@/utils/connectDB";
import TodoUser from "models/TodoUser";
import { hashPassword } from "utils/auth";

const handler = async (req, res) => {
  if (req.method !== "POST") return;
  await connectDB();
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ status: "failed", message: "Invalid data" });
  }
  const existingUser = await TodoUser.findOne({ email });
  if (existingUser) {
    return res
      .status(422)
      .json({ status: "failed", message: "User already exists" });
  }
  const hashedPassword = await hashPassword(password);
  const newUser = await TodoUser.create({
    email: email.toLowerCase(),
    password: hashedPassword,
  });
  res.status(201).json({
    status: "success",
    message: "Account created successfully, Welcome to our site",
  });
};
export default handler;
