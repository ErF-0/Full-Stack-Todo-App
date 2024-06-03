const sortTodos = (todos) => {
  const sortedData = {};
  const status = ["todo", "inProgress", "review", "done"];

  status.map((item) => (sortedData[item] = []));

  todos.map((todo) => {
    sortedData[todo.status].push(todo);
  });

  return sortedData;
};
export { sortTodos };
