import { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Email from "./components/Email";
import { Plus } from "lucide-react";

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
      <section>
        {showForm && (
          <TaskForm onAddTask={onAddTask} setShowForm={setShowForm} />
        )}
        <main className="px-5 py-10 relative bg-[#f5f9fc]">
          <div>
            <header className="text-4xl tracking-tighter">
              Task Manager
            </header>
            <p>Organize your day, achieve your goals.</p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="px-3 lg:px-5 py-3 mt-5 text-sm lg:text-base w-fit flex items-center justify-center gap-1 bg-black text-white rounded-xl cursor-pointer hover:shadow-md hover:bg-black/90"
          >
            <Plus className="w-4 h-4 lg:h-5 lg:w-5" /> Add task
          </button>
          <section className="mt-10 flex flex-col gap-10">
            <div className="flex overflow-x-auto gap-4 scrollbar-hide lg:flex-wrap">
              <button
                onClick={() => setFilter("all")}
                className={`${filter === "all" ? `bg-black text-white` : `bg-transparent text-[#666]`} whitespace-nowrap text-sm lg:text-base px-3 py-2 rounded-md cursor-pointer transition duration-200 hover:scale-102`}
              >
                All
              </button>
              <button
                onClick={() => setFilter("completed")}
                className={`${filter === "completed" ? `bg-black text-white` : `bg-transparent text-[#666]`} whitespace-nowrap text-sm lg:text-base px-3 py-2 rounded-md cursor-pointer transition duration-200 hover:scale-102`}
              >
                Completed
              </button>
              {/* <div className="w-[1px] bg-gray-300 h-5 mx-1 self-center" /> */}
              <div style={{ width: "1px", height: "24px", backgroundColor: "#d1d5db" }} className="self-center mx-2" />
              <button
                onClick={() => setFilter("work")}
                className={`${filter === "work" ? `bg-black text-white` : `bg-transparent text-[#666]`} whitespace-nowrap text-sm lg:text-base px-3 py-2 rounded-md cursor-pointer transition duration-200 hover:scale-102`}
              >
                Work
              </button>
              <button
                onClick={() => setFilter("personal")}
                className={`${filter === "personal" ? `bg-black text-white` : `bg-transparent text-[#666]`} whitespace-nowrap text-sm lg:text-base px-3 py-2 rounded-md cursor-pointer transition duration-200 hover:scale-102`}
              >
                Personal
              </button>
              <button
                onClick={() => setFilter("school")}
                className={`${filter === "school" ? `bg-black text-white shadow-lg` : `bg-transparent text-[#666]`} whitespace-nowrap text-sm lg:text-base px-3 py-2 hover:shadow-lg rounded-md cursor-pointer transition duration-200 hover:scale-102`}
              >
                School
              </button>  
            </div>
            <div>
              <TaskList
                filteredTasks={filteredTasks}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
                formatId
              />
            </div>
            <div>
              <Email />
            </div>
          </section>
        </main>
      </section>
    </>
  );
}

export default App;
