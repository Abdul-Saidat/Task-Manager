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
import ProgressBar from "./components/ProgressBar";
import { getProgress } from "./utils/taskHelpers";

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

  const percentage = getProgress(tasks);

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
        <main className="mx-auto max-w-275 px-4 py-8 bg-[#f5f9fc]">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <header className="text-4xl lg:text-5xl font-bold tracking-tight">
                Task Manager
              </header>
              <p className="mt-2 text-gray-600 max-w-sm">
                Organize your day, achieve your goals.
              </p>

              <button
                onClick={() => setShowForm(true)}
                className="px-3 lg:px-5 py-3 mt-5 text-sm lg:text-base w-fit flex items-center justify-center gap-1 bg-black text-white rounded-xl cursor-pointer hover:shadow-md hover:bg-black/90"
              >
                <Plus className="w-4 h-4 lg:h-5 lg:w-5" />
                Add task
              </button>
            </div>

            <section className="min-h-45 text-center px-5 py-7 rounded-2xl shadow-md bg-[#cfdfeb] flex flex-col justify-center">
              <QuoteBox />
            </section>
          </section>
          <section className="mt-10">
            <div className="w-full px-5 py-5 rounded-md border border-blue-100 shadow-md">
              <header>Overall Progress</header>
              <p className="text-[#7376B2] text-sm mt-2">
                {" "}
                <span className="">{completedTasks.length} </span>
                of
                <span className=""> {tasks.length}</span> tasks completed{" "}
              </p>
              <ProgressBar percentage={percentage} />
              <div className="flex justify-between mt-5">
                <p className="text-[#7376B2] text-sm">
                  {" "}
                  {percentage}% Complete{" "}
                </p>
                <p className="text-[#7376B2] text-sm">
                  {" "}
                  {tasks.length - completedTasks.length} task(s) remaining{" "}
                </p>
              </div>
            </div>
          </section>
          <section className="mt-10">
            <p>Categories</p>
            <div className="flex flex-col md:flex-row gap-4 mt-2">
              <div className="w-full px-3 py-5 lg:p-5 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition">
                <p className="lg:text-xl font-medium">Work</p>
                <p className="text-[#7376B2] text-[14px]">{work.total} tasks</p>
                <div className="flex justify-between">
                  <p className="text-[#7376B2] text-[14px] mt-2">Progress</p>
                  <p className="text-[#7376B2] text-[14px]">
                    {work.completed === 0
                      ? 0
                      : (work.completed / work.total) * 100}
                    %
                  </p>
                </div>
                <ProgressBar
                  percentage={
                    work.completed === 0
                      ? 0
                      : (work.completed / work.total) * 100
                  }
                />
                <p className="text-[#7376B2] text-[14px]">
                  {work.completed}/{work.total} completed
                </p>
              </div>
              <div className="w-full p-5 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition">
                <p className="lg:text-xl font-medium">School</p>
                <p className="text-[#7376B2] text-[14px]">
                  {school.total} tasks
                </p>
                <div className="flex justify-between">
                  <p className="text-[#7376B2] text-[14px] mt-2">Progress</p>
                  <p className="text-[#7376B2] text-[14px]">
                    {school.completed === 0
                      ? 0
                      : (school.completed / school.total) * 100}
                    %
                  </p>
                </div>
                <ProgressBar
                  percentage={
                    school.completed === 0
                      ? 0
                      : (school.completed / school.total) * 100
                  }
                />
                <p className="text-[#7376B2] text-[14px]">
                  {" "}
                  {school.completed}/{school.total} completed
                </p>
              </div>
              <div className="w-full p-5 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition">
                <p className="lg:text-xl font-medium">Personal</p>
                <p className="text-[#7376B2] text-[14px]">
                  {personal.total} tasks
                </p>
                <div className="flex justify-between">
                  <p className="text-[#7376B2] text-[14px] mt-2">Progress</p>
                  <p className="text-[#7376B2] text-[14px]">
                    {personal.total === 0
                      ? 0
                      : (personal.completed / personal.total) * 100}
                    %
                  </p>
                </div>
                <ProgressBar
                  percentage={
                    personal.completed === 0
                      ? 0
                      : (personal.completed / personal.total) * 100
                  }
                />
                <p className="text-[#7376B2] text-[14px]">
                  {personal.completed / personal.total} completed
                </p>
              </div>
            </div>
          </section>
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
