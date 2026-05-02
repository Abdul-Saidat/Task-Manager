import { useEffect, useState } from "react";
import "./App.css";
import { Plus } from "lucide-react";
import { ToastContainer } from "react-toastify";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Email from "./components/Email";
import EditModal from "./components/editModal";
import DeleteModal from "./components/DeleteModal";
import PricingSection from "./components/pricing/PricingSection";
import QuoteBox from "./components/QuoteBox";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState("all");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const [editText, setEditText] = useState("");
  const [editCategory, setEditCategory] = useState("school");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

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

  const completedTasks = tasks.filter((task) => {
    if (task.completed === true) {
      return task.completed;
    }
  });

  const getCategoryStats = (tasks, category) => {
    const total = tasks.filter((task) => task.category === category).length;

    const completed = tasks.filter(
      (task) => task.category === category && task.completed,
    ).length;

    return { total, completed };
  };

  const work = getCategoryStats(tasks, "work");

  const school = getCategoryStats(tasks, "school");

  const personal = getCategoryStats(tasks, "personal");

  const saveEditedTask = () => {
    // editTask = which task am i editing exactly; editText = what text is currently inside the input

    const updatedTasks = filteredTasks.map((task) =>
      task.id === editTask.id
        ? { ...task, text: editText, category: editCategory }
        : task,
    );

    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setIsEditModalOpen(false);
  };

  const handleEdit = (id) => {
    const selectedTask = filteredTasks.find((task) => task.id === id);

    setEditTask(selectedTask);
    setEditText(selectedTask.text);
    setEditCategory(selectedTask.category);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = (id) => {
    setTaskToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    const updated = tasks.filter((task) => task.id !== taskToDelete);

    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));

    setIsDeleteModalOpen(false);
    setTaskToDelete(null);
  };
  return (
    <>
      <ToastContainer />
      <section>
        {isEditModalOpen && (
          <EditModal
            setIsEditModalOpen={setIsEditModalOpen}
            editTask={editTask}
            editText={editText}
            setEditText={setEditText}
            editCategory={editCategory}
            setEditCategory={setEditCategory}
            saveEditedTask={saveEditedTask}
          />
        )}
        {isDeleteModalOpen && (
          <DeleteModal
            onCancel={() => setIsDeleteModalOpen(false)}
            onConfirm={confirmDelete}
          />
        )}
        {showForm && (
          <TaskForm onAddTask={onAddTask} setShowForm={setShowForm} />
        )}
        <main className="px-5 py-10 relative bg-[#f5f9fc]">
          <div>
            <header className="text-4xl tracking-tighter">Task Manager</header>
            <p>Organize your day, achieve your goals.</p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="px-3 lg:px-5 py-3 mt-5 text-sm lg:text-base w-fit flex items-center justify-center gap-1 bg-black text-white rounded-xl cursor-pointer hover:shadow-md hover:bg-black/90"
          >
            <Plus className="w-4 h-4 lg:h-5 lg:w-5" /> Add task
          </button>
          <QuoteBox />
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
              <div
                style={{
                  width: "1px",
                  height: "24px",
                  backgroundColor: "#d1d5db",
                }}
                className="self-center mx-2"
              />
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
            <section className="flex flex-col lg:flex-row gap-3">
              <div className="w-65 p-10 border rounded-2xl">
                <span className="text-purple-700">{completedTasks.length}</span>
                of
                <span className="text-purple-700"> {tasks.length}</span> tasks
                completed
              </div>
              <div className="w-65 p-10 border rounded-2xl">
                <p>
                  {" "}
                  work: {work.completed} / {work.total}{" "}
                </p>
                <p>Total: {work.total}</p>
                <p>Completed: {work.completed}</p>
                <p>Progress: {(work.completed / work.total) * 100}%</p>
              </div>
              <div className="w-65 p-10 border rounded-2xl">
                <p>
                  school: {school.completed} / {school.total}
                </p>
                <p>Total: {school.total}</p>
                <p>Completed: {school.completed}</p>
                <p>Progress: {(school.completed / school.total) * 100}%</p>
              </div>
              <div className="w-65 p-10 border rounded-2xl">
                <p>
                  personal: {personal.completed} / {personal.total} Completed
                </p>
                <p>Total: {personal.total}</p>
                <p>Completed: {personal.completed}</p>
                <p>Progress: {(personal.completed / personal.total) * 100}%</p>
              </div>
            </section>
            <div>
              <TaskList
                filteredTasks={filteredTasks}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
                formatId
                setTasks={setTasks}
                handleEdit={handleEdit}
                saveEditedTask={saveEditedTask}
                handleDeleteClick={handleDeleteClick}
              />
            </div>
            <div>
              <Email />
            </div>
            <section id="pricing">
              <PricingSection />
            </section>
          </section>
        </main>
      </section>
    </>
  );
}

export default App;
