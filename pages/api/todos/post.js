import connectDB from "@/utils/connectDB";
import TodoUser from "@/models/TodoUser";
import { validToken } from "@/utils/auth";

const handler = async (req, res) => {
  if (req.method !== "POST") return;

  await connectDB();

  const userEmail = await validToken(req, res);

  const { todo } = req.body;

  if (!todo.title || !todo.status) {
    return res.status(422).json({ status: "failed", message: "Invalid data" });
  }

  const user = await TodoUser.findOne({ email: userEmail });

  if (!user) {
    return res
      .status(404)
      .json({ status: "failed", message: "User doesn't exist" });
  }

  user.todos.push(todo);
  await user.save();

  return res
    .status(201)
    .json({ status: "success", message: "New Todo created" });
};
export default handler;
