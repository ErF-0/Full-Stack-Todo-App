import { Schema, model, models } from "mongoose";
const todoUserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: String,
  lastName: String,
  todos: [{ title: String, status: String, details: String }],
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
});
const TodoUser = models.TodoUser || new model("TodoUser", todoUserSchema);
export default TodoUser;
