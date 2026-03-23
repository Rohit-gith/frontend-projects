import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const [dueDate, setDueDate] = useState(todo.dueDate || ""); // 📅 NEW
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg, dueDate }); // 📅 date bhi update
    setIsTodoEditable(false);
  };

  // 📅 Due date color logic
  const getDueDateClass = () => {
    if (!dueDate || todo.completed) return "";
    const today = new Date().toISOString().split("T")[0];
    if (dueDate < today) return "overdue";      // red — date nikal gayi
    if (dueDate === today) return "due-today";  // orange — aaj deadline
    return "due-upcoming";                       // green — abhi time hai
  };

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />

      <div className="todo-content">
        <input
          type="text"
          value={todoMsg}
          readOnly={!isTodoEditable}
          onChange={(e) => setTodoMsg(e.target.value)}
          className={`todo-text ${isTodoEditable ? "editable" : ""}`}
        />

        {/* 📅 Due Date display / edit */}
        {isTodoEditable ? (
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="date-input-small"
          />
        ) : (
          dueDate && (
            <span className={`due-date-badge ${getDueDateClass()}`}>
              📅 {dueDate}
            </span>
          )
        )}
      </div>

      <button
        className="edit-btn"
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) editTodo();
          else setIsTodoEditable(true);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "💾" : "✏️"}
      </button>

      <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
        ✕
      </button>
    </div>
  );
}

export default TodoItem;