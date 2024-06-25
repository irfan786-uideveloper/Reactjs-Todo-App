import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [inputVal, setInputVal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(inputVal);
    setInputVal("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="whats ur task Today"
        className="todo-input"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button className="todo-btn">Add task</button>
    </form>
  );
};

export default TodoForm;
