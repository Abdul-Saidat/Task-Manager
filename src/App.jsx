import { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import EmailInput from "./components/emailInput";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState("all");

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onAddTask(text, category) {
    const storedDate = Date.now();
    if (!text.trim()) return;

    setTasks((prev) => [
      ...prev,
      {
        id: storedDate,
        text,
        category,
        completed: false,
        createdAt: storedDate,
      },
    ]);
  }

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "completed") return task.completed;
    return task.category === filter;
  });
  return (
    <>
      {showForm && <TaskForm onAddTask={onAddTask} setShowForm={setShowForm} />}
      <section className="px-5 py-6 relative bg-[#f5f9fc]">
        <header className="text-4xl"> Task Manager </header>
        <p>Organize your day, achieve your goals.</p>
        <button
          onClick={() => setShowForm(true)}
          className="px-5 py-3 mt-10 bg-black text-white rounded-xl cursor-pointer"
        >
          Add task
        </button>
        <div className="mt-8">
          <div className="flex gap-5">
            <div className="flex gap-2">

            <button
              onClick={() => setFilter("all")}
              className="px-3 py-2 bg-black text-white rounded-md cursor-pointer"
            >
              All
            </button>
            <button
              onClick={() => setFilter("completed")}
              className="px-3 py-2 bg-black text-white rounded-md cursor-pointer"
            >
              Completed
            </button>
            </div>
            <div className="flex gap-2">

            <button
              onClick={() => setFilter("work")}
              className="px-3 py-2 bg-black text-white rounded-md cursor-pointer"
            >
              Work
            </button>
            <button
              onClick={() => setFilter("personal")}
              className="px-3 py-2 bg-black text-white rounded-md cursor-pointer"
            >
              Personal
            </button>
            <button
              onClick={() => setFilter("school")}
              className="px-3 py-2 bg-black text-white rounded-md cursor-pointer"
            >
              School
            </button>
            </div>
          </div>
        </div>
        <TaskList
          filteredTasks={filteredTasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          formatId
        />
        <EmailInput />
      </section>
    </>
  );
}

export default App;
