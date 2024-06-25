import React from "react";
import { FaTrash, FaPen } from "react-icons/fa";

const TodoList = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className="Todo">
      <p
        className={`${task.completed ? "completed" : "incompleted"}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div>
        <FaTrash className="fa-trash" onClick={() => deleteTodo(task.id)} />
        <FaPen onClick={() => editTodo(task.id)} />
      </div>
    </div>
  );
};

export default TodoList;
