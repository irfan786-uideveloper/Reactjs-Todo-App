import React, { useState } from "react";

const TodoForm = ({ editTodo, task }) => {
  const [inputVal, setInputVal] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(inputVal, task.id);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Update task
      </button>
    </form>
  );
};

export default TodoForm;
