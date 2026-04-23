// import { useState } from 'react'
import { useEffect, useState } from "react";
import "./App.css";
// import { AddTask } from "./components/addTask";
import EmailInput from "./components/emailInput";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");
  const [completed, setCompleted] = useState(false);
  const [filter, setFilter] = useState("all");
  // const [ setIsChecked] = useState(false);

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function showModal() {
    console.log("clickedd");
    setShowForm(prev => !prev);
  }
  
  const toggleTask = (id) => {
    setTasks(
      prev => prev.map((prev) =>
        prev.id === id ? { ...prev, completed: !prev.completed } : prev,
    ),
  );
};

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id));
};

const filteredTasks = tasks.filter((task) => {
  if (filter === "all") return true;
  if (filter === "completed") return task.completed;
  return task.category === filter;
});

const formatId = (timestamp) =>
  new Date(timestamp).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const storedDate = Date.now();
  // const handleOnCheck = (e) => {
  //   setIsChecked(e.target.checked);
  // };
  return (
    <>
      {showForm && (
        <div className="bg-black/50 fixed inset-0 flex items-center justify-center z-50 ">
          <div className="bg-red-200 p-6 rounded-md ">
            <form
              action=""
              onSubmit={(e) => {
                e.preventDefault();
                if (!text.trim()) return;
                
                  setTasks((prev) => [
                    ...prev,
                    { id: storedDate, text, category, completed: false, createdAt: storedDate },
                  ]);     
                setText("")
                setCategory("")
                setCompleted(false)
              }}
              className="flex flex-col gap-3"
            >
              <div>
                <label htmlFor="text">Text</label>{" "}
                <input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="category"> Category: </label>{" "}
                <select
                  name="category"
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="work">Work</option>
                  <option value="school">School</option>
                  <option value="personal">Personal</option>
                </select>
              </div>
              <div className="flex gap-2">
                <button
                  className="border-2"
                  onClick={() => setShowForm(prev => !prev)}
                  type="button"
                >
                  Cancel
                </button>
                <button type="submit" className="border-2">Add Task</button>
              </div>
            </form>
          </div>
        </div>
      )}
      <section className="px-5 py-6 relative">
        <header className="text-4xl"> Task Manager </header>
        <p>Organize your day, achieve your goals.</p>
        <button
          onClick={showModal}
          className="px-5 py-3 mt-10 bg-black text-white rounded-xl cursor-pointer"
        >
          Add task
        </button>
        {/* category + tasklist */}
        <div className="mt-8">
          <div className="flex gap-3">
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

        {/* Task list section */}
        <div className="mt-8">
          {/* <ul className="list-none"> */}
            <div className="w-full">
              {filteredTasks.length === 0 && (
                <p>No tasks yet. Add one to get started!</p>
              )}
              {filteredTasks.map((task) => (
                  <div className="w-full list-none"  key={task.id}>
                    <div
                     
                      className="mt-5 bg-green-100 px-5 py-10 rounded-lg w-full"
                    >
                      <input
    
                        type="checkbox"
                        className="rounded-full h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                        checked={task.completed}
                        onChange={() => toggleTask(task.id)}
                      />
                      {task.text}
                      {/* {setTasks(Tasks.map(task => (
                  )))} */}
                      <div>
                        <span className="text-[12px] px-5 py-1 rounded-full bg-green-200">
                          {task.category}
                        </span>
                        <span> {formatId(task.createdAt)} </span>
                        <p>
                          The task is
                          {task.completed ? "Completed" : "Uncompleted"}{" "}
                        </p>
                      </div>
                      <button
                        className="cursor-pointer"
                        onClick={() => deleteTask(task.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
              ))}
            </div>
          {/* </ul> */}
        </div>
        < EmailInput/>
      </section>
    </>
  );
}

export default App;
