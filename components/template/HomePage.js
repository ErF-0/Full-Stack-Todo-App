import Task from "@/components/module/Task";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [todos, setTodos] = useState("");
  useEffect(() => {
    fetching();
  }, []);
  const fetching = async () => {
    const res = await fetch("/api/todos/get");
    const data = await res.json();
    if (data.status === "success") setTodos(data.data);
  };
  return (
    <div className="home-page">
      <Task
        forClass="todo"
        data={todos.todo}
        title="Todo"
        next="inProgress"
        fetching={fetching}
      />
      <Task
        forClass="inProgress"
        data={todos.inProgress}
        title="In Progress"
        back="todo"
        next="review"
        fetching={fetching}
      />
      <Task
        forClass="review"
        data={todos.review}
        title="Review"
        back="inProgress"
        next="done"
        fetching={fetching}
      />
      <Task
        forClass="done"
        data={todos.done}
        title="Done"
        back="review"
        fetching={fetching}
      />
    </div>
  );
};

export default HomePage;
