import connectDB from "@/utils/connectDB";
import { validToken } from "@/utils/auth";
import TodoUser from "@/models/TodoUser";
import { verifyPassword } from "utils/auth";

const handler = async (req, res) => {
  await connectDB();
  const userEmail = await validToken(req, res);

  const user = await TodoUser.findOne({ email: userEmail });

  if (req.method === "POST") {
    const { name, lastName, password } = req.body;

    if (!name || !lastName || !password) {
      return res
        .status(422)
        .json({ status: "failed", message: "Invalid Data!" });
    }
    const isValid = await verifyPassword(password, user.password);
    if (!isValid) {
      return res
        .status(422)
        .json({ status: "failed", message: "Your password is incorrect!" });
    }
    user.name = name;
    user.lastName = lastName;
    await user.save();
    return res.status(200).json({ status: "success", message: "Date updated" });
  } else if (req.method === "GET") {
    return res.status(200).json({
      status: "success",
      data: { name: user.name, lastName: user.lastName, email: user.email },
    });
  }
};
export default handler;
