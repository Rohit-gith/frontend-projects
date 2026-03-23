<div align="center">

# 📝 Todo Manager

### *A production-ready task manager built with React*

<br/>

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-Custom-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

<br/>

> Built to demonstrate **Context API**, **custom hooks**, **localStorage persistence**,
> and clean **component-based architecture** in React.

<br/>

🔗 **[Live Demo](#)** &nbsp;&nbsp;|&nbsp;&nbsp; 📂 **[Source Code](https://github.com/Rohit-gith/frontend-projects/tree/main/10TodocontextLocal)**

</div>

---

## 📸 Preview

<div align="center">
  <img src="./screenshot.png" alt="Todo Manager Preview" width="600" />
</div>

> 💡 *Take a screenshot of your app → save as `screenshot.png` in this folder*

---

## ✨ Features

- ➕ &nbsp;**Add Todo** — Instantly add new tasks
- ✏️ &nbsp;**Edit Todo** — Inline editing with one click
- ❌ &nbsp;**Delete Todo** — Remove tasks cleanly
- ✅ &nbsp;**Complete Toggle** — Mark tasks done with strikethrough
- 🔍 &nbsp;**Live Search** — Filter todos in real-time as you type
- 📅 &nbsp;**Due Dates** — Set deadlines with smart color-coded badges
- 💾 &nbsp;**LocalStorage** — Data auto-saves, survives page refresh

---

## 🎨 Due Date Badges

| Badge | Color | Meaning |
|-------|-------|---------|
| 📅 Future date | 🟢 Green | Deadline is upcoming — you're good |
| 📅 Today | 🟠 Orange | Due today — get it done! |
| 📅 Past date | 🔴 Red | Overdue — missed deadline |

---

## 🧠 React Concepts Demonstrated

```
✔ createContext + useContext     →  Global state without Redux
✔ Custom Hook (useTodo)         →  Clean, reusable state access
✔ useState                      →  Local component state
✔ useEffect                     →  localStorage sync on state change
✔ Component Composition         →  Separated Form, Item, Context layers
✔ Controlled Inputs             →  Proper React form handling
✔ Conditional Rendering         →  Edit mode vs read mode toggle
✔ Prop drilling avoided         →  Context consumed directly in children
```

---

## 🗂️ Folder Structure

```
10TodocontextLocal/
│
├── src/
│   ├── contexts/
│   │   └── TodoContext.js       ← Context + useTodo hook + Provider export
│   │
│   ├── components/
│   │   ├── TodoForm.jsx         ← Input form to add todo + due date
│   │   └── TodoItem.jsx         ← Single todo: edit / delete / complete / date
│   │
│   ├── App.jsx                  ← State, localStorage logic, search filter
│   ├── App.css                  ← All custom styles
│   └── main.jsx                 ← React entry point
│
└── index.html
```

---

## 🏗️ Architecture — How Context Flows

```
App.jsx  (State lives here)
  │
  └── <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
            │
            ├── <TodoForm />
            │     └── useTodo() → calls addTodo
            │
            └── <TodoItem />  (one per todo)
                  └── useTodo() → calls updateTodo, deleteTodo, toggleComplete
```

> No prop drilling. Every component gets what it needs directly from context.

---

## ⚙️ Run Locally

```bash
# Clone the full repo
git clone https://github.com/Rohit-gith/frontend-projects.git

# Navigate to this project
cd frontend-projects/10TodocontextLocal

# Install dependencies
npm install

# Start development server
npm run dev
```

Open **[http://localhost:5173](http://localhost:5173)** in your browser 🚀

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI library |
| **Vite** | Fast dev server & build tool |
| **Context API** | Global state management |
| **LocalStorage** | Client-side data persistence |
| **CSS3** | Custom styling — no UI library used |

---

## 📬 Let's Connect

<div align="center">

| Platform | Link |
|----------|------|
| 🐙 GitHub | [@Rohit-gith](https://github.com/Rohit-gith) |
| 💼 LinkedIn | *[Add your LinkedIn URL here]* |
| 📧 Email | *[Add your email here]* |

</div>

---

## 📁 More Projects in this Series

| # | Project | Key Concepts |
|---|---------|-------------|
| 10 | **Todo Manager** *(you are here)* | Context API, Hooks, LocalStorage |
| ... | *More coming soon...* | |

---

<div align="center">

**If you found this helpful, please ⭐ star the repo!**

*Made with 💙 by [Rohit](https://github.com/Rohit-gith)*

</div>
