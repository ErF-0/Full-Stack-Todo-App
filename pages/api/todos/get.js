import connectDB from "@/utils/connectDB";
import TodoUser from "@/models/TodoUser";
import { validToken } from "@/utils/auth";
import { sortTodos } from "@/utils/sortTodos";

const handler = async (req, res) => {
  if (req.method !== "GET") return;
  await connectDB();
  const userEmail = await validToken(req, res);
  const user = await TodoUser.findOne({ email: userEmail });
  if (!user) {
    return res
      .status(404)
      .json({ status: "failed", message: "User doesn't exist" });
  }
  const sortedData = sortTodos(user.todos);

  res.status(200).json({ status: "success", data: sortedData });
};
export default handler;
