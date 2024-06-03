import TaskList from "@/components/element/TaskList";

const Task = ({ title, data, forClass, back, next, fetching }) => {
  return (
    <div className={`home-page--${forClass}`}>
      <p>{title}</p>
      <TaskList data={data} back={back} next={next} fetching={fetching} />
    </div>
  );
};

export default Task;
