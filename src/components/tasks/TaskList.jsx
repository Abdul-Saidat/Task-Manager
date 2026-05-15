import { useState } from "react";
import { ClipboardList } from "lucide-react";
import TaskItem from "./TaskItem";

function TaskList({
  filteredTasks,
  toggleTask,
  deleteTask,
  handleEdit,
  handleDeleteClick,
  filter,
  setFilter,
}) {
  const formatId = (timestamp) =>
    new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const [searchTerm, setSearchTerm] = useState("");

  const searchResult = filteredTasks.filter((task) =>
    task.text.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <div className="">
        <h2 className="dark:text-gray-100 text-xl lg:text-3xl font-semibold text-center mb-1 lg:mb-4 mt-6">
          Your tasks
        </h2>
        <div className="flex overflow-x-auto gap-4 scrollbar-hide lg:flex-wrap">
          <button
            onClick={() => setFilter("all")}
            className={`${filter === "all" ? `bg-black dark:bg-slate-600 text-white` : `bg-transparent text-[#666]`} whitespace-nowrap text-sm lg:text-base px-3 py-2 rounded-md cursor-pointer transition duration-200 hover:scale-102`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`${filter === "completed" ? `bg-black dark:bg-slate-600 text-white` : `bg-transparent text-[#666]`} whitespace-nowrap text-sm lg:text-base px-3 py-2 rounded-md cursor-pointer transition duration-200 hover:scale-102`}
          >
            Completed
          </button>
          <div className="w-[1.5px] bg-gray-300 h-5 mx-1 self-center" />
          <button
            onClick={() => setFilter("work")}
            className={`${filter === "work" ? `bg-black dark:bg-slate-600 text-white` : `bg-transparent text-[#666]`} whitespace-nowrap text-sm lg:text-base px-3 py-2 rounded-md cursor-pointer transition duration-200 hover:scale-102`}
          >
            Work
          </button>
          <button
            onClick={() => setFilter("personal")}
            className={`${filter === "personal" ? `bg-black dark:bg-slate-600 text-white` : `bg-transparent text-[#666]`} whitespace-nowrap text-sm lg:text-base px-3 py-2 rounded-md cursor-pointer transition duration-200 hover:scale-102`}
          >
            Personal
          </button>
          <button
            onClick={() => setFilter("school")}
            className={`${filter === "school" ? `bg-black dark:bg-slate-600 text-white shadow-lg` : `bg-transparent text-[#666]`} whitespace-nowrap text-sm lg:text-base px-3 py-2 rounded-md cursor-pointer transition duration-200 hover:scale-102`}
          >
            School
          </button>
        </div>
        <div>
          <input
            type="search"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="dark:border-slate-500 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 mt-3 outline-none text-slate-700 w-full max-w-md p-3 h-7 focus:border-slate-800 rounded-md border border-slate-500 px-2"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
              }
            }}
          />
        </div>

        {searchResult.length === 0 && (
          <div className="flex flex-col items-center justify-center mt-3">
            <ClipboardList size={40} className=" text-gray-300 mb-2" />
            <p className="text-[#999] text-center">
              No tasks yet.
              <br /> Add one to get started!
            </p>
          </div>
        )}

        <div className="dark:bg-slate-800 dark:border-slate-600 w-full flex flex-col bg-white border border-[#e6e9ed] rounded-2xl shadow-md mt-5 ">
          {searchResult.map((task, index) => (
            <div key={task.id}>
              <TaskItem
                handleEdit={handleEdit}
                task={task}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
                formatId={formatId}
                handleDeleteClick={handleDeleteClick}
              />
              {index < searchResult.length - 1 && (
                <div className="border-t border-[#e6e9ed] dark:border-slate-700" />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TaskList;
