import { RiMastodonLine } from "react-icons/ri";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
const TaskList = ({ data, back, next, fetching }) => {
  const changeStatus = async (id, status) => {
    const res = await fetch("/api/todos/patch", {
      method: "PATCH",
      body: JSON.stringify({ id, status }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (data.status === "success") fetching();
  };

  return (
    <div className="tasks">
      {data?.map((todo) => (
        <div key={todo._id} className="tasks__card">
          <span className={todo.status}></span>
          <RiMastodonLine />
          <h4>{todo.title}</h4>
          <div>
            {back ? (
              <button
                className="button-back"
                onClick={() => changeStatus(todo._id, back)}
              >
                <BiLeftArrow />
                Back
              </button>
            ) : null}

            {next ? (
              <button
                className="button-next"
                onClick={() => changeStatus(todo._id, next)}
              >
                Next
                <BiRightArrow />
              </button>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
