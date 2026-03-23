// import { useState } from 'react'
// import { TodoProvider } from './contexts'
// import './App.css'

// function App() {
//   const [todos, setTodos] = useState([])
//   const addTodo = (todo) => {
//     setTodos(() => [...prev] )
//   }
//   return (
//     <TodoProvider value={{todos,addTodo,deleteTodo,updateTodo,toggleComplete}}>
//     <div className="bg-[#172842] min-h-screen py-8">
//                 <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
//                     <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
//                     <div className="mb-4">
//                         {/* Todo form goes here */} 
//                     </div>
//                     <div className="flex flex-wrap gap-y-3">
//                         {/*Loop and Add TodoItem here */}
//                     </div>
//                 </div>
//             </div>
//     </TodoProvider>
//   )
// }

// export default App

import { useState, useEffect } from "react";
import { TodoProvider } from "./contexts/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // 🔍 NEW

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((t) => (t.id === id ? todo : t)));
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos"));
    if (saved && saved.length > 0) setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // 🔍 Filter logic
  const filteredTodos = todos.filter((t) =>
    t.todo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="app-container">
        <h1>Manage Your Todos</h1>
        <TodoForm />

        {/* 🔍 Search Bar */}
        <input
          type="text"
          placeholder="🔍 Search todos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />

        <div className="todo-list">
          {filteredTodos.length === 0 ? (
            <p className="no-result">No todos found! 😕</p>
          ) : (
            filteredTodos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))
          )}
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;