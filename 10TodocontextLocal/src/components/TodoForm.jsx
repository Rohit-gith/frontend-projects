import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoForm() {
  const [todoMsg, setTodoMsg] = useState("");
  const [dueDate, setDueDate] = useState(""); // 📅 NEW
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todoMsg.trim()) return;
    addTodo({ todo: todoMsg, completed: false, dueDate }); // 📅 dueDate bhi save
    setTodoMsg("");
    setDueDate("");
  };

  return (
    <form className="todo-form" onSubmit={add}>
      <input
        type="text"
        placeholder="Write Todo..."
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        className="todo-input"
      />
      {/* 📅 Date Picker */}
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="date-input"
      />
      <button type="submit" className="add-btn">Add</button>
    </form>
  );
}

export default TodoForm;