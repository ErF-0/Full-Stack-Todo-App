import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RadioButton from "@/components/element/RadioButton";
import Loader from "@/components/module/Loader";
import { GrAddCircle } from "react-icons/gr";
import { BsAlignStart } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { AiOutlineFileSearch } from "react-icons/ai";
import { MdDoneAll } from "react-icons/md";

const AddTodoPage = () => {
  const [loader, setLoader] = useState(false);
  const [todo, setTodo] = useState({
    title: "",
    details: "",
    status: "todo",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };
  const addHandler = async () => {
    setLoader(true);
    const res = await fetch("/api/todos/post", {
      method: "POST",
      body: JSON.stringify({ todo }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (data.status === "success") {
      toast.success("Todo added!");
      setTodo({
        title: "",
        details: "",
        status: "todo",
      });
    } else {
      data.status === "failed" && data.message === "Invalid data"
        ? toast.error("Please Enter Title ")
        : toast.error("Something went wrong!");
    }
    setLoader(false);
  };
  return (
    <div className="add-form">
      <h2>
        <GrAddCircle />
        Add new Todo
      </h2>
      <div className="add-form__input">
        <div className="add-form__input--first">
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            name="title"
            value={todo.title}
            onChange={changeHandler}
          />
        </div>
        <div>
          <div className="add-form__input--first">
            <label htmlFor="details">Details :</label>
            <input
              type="text"
              id="details"
              name="details"
              value={todo.details}
              onChange={changeHandler}
            />
          </div>
          <div className="add-form__input--radio">
            <RadioButton
              title="Todo"
              value="todo"
              status={todo.status}
              setTodo={changeHandler}
            >
              <BsAlignStart />
            </RadioButton>
            <RadioButton
              title="In Progress"
              value="inProgress"
              status={todo.status}
              setTodo={changeHandler}
            >
              <FiSettings />
            </RadioButton>
            <RadioButton
              title="Review"
              value="review"
              status={todo.status}
              setTodo={changeHandler}
            >
              <AiOutlineFileSearch />
            </RadioButton>
            <RadioButton
              title="Done"
              value="done"
              status={todo.status}
              setTodo={changeHandler}
            >
              <MdDoneAll />
            </RadioButton>
          </div>
        </div>
        {loader ? <Loader /> : <button onClick={addHandler}>Add</button>}
      </div>

    </div>
  );
};

export default AddTodoPage;
