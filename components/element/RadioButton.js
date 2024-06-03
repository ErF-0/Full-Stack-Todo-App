const RadioButton = ({ title, status, setTodo, value, children }) => {
  return (
    <div className={value}>
      <label htmlFor={value}>
        {children}
        {title}
      </label>
      <input
        type="radio"
        name="status"
        id={value}
        checked={status === value}
        value={value}
        onChange={setTodo}
      />
    </div>
  );
};

export default RadioButton;
