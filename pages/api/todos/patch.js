import connectDB from "@/utils/connectDB";
import TodoUser from "@/models/TodoUser";
import { validToken } from "@/utils/auth";

const handler = async (req, res) => {
  if (req.method !== "PATCH") return;
  await connectDB();
  const { status, id } = req.body;
  if (!status || !id) {
    res.status(422).json({ status: "failed", message: "Invalid data" });
  }
  const userEmail = await validToken(req, res);
  const user = await TodoUser.findOne({ email: userEmail });
  if (!user) {
    return res
      .status(404)
      .json({ status: "failed", message: "User doesn't exist" });
  }
  const changeStatus = await TodoUser.updateOne(
    { "todos._id": id },
    { "todos.$.status": status }
  );
  res.status(200).json({ status: "success", message: "Data updated" });
};
export default handler;
