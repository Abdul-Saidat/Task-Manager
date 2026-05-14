import { Trash2 } from "lucide-react";
import { Calendar } from "lucide-react";
import EditModal from "../editModal";
import DeleteModal from "../DeleteModal";

function TaskItem({
  task,
  toggleTask,
  formatId,
  handleEdit,
  handleDeleteClick,
}) {
  return (
    <>
      <div key={task.id}>
        <div className="px-4 lg:px-6 py-7 flex items-start">
          <div className="flex items-start flex-1 min-w-0">
            <input
              type="checkbox"
              className="dark:bg-slate-600 dark:accent-slate-950 border border-gray-500 mr-2 lg:mr-4 mt-1.5 checked:bg-black text-white cursor-pointer rounded-full w-4 h-4 lg:h-5 lg:w-5 accent-black"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <div className="flex flex-col gap-0.5 text-[#111827] dark:text-white">
              <span
                className={`${task.completed ? "line-through opacity-[0.6] dark:opacity-30" : "none"} text-[18px] lg:text-xl font-semibold`}
              >
                {task.text}
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs px-3 py-1 rounded-full bg-blue-100 font-semibold text-blue-700">
                  {task.category}
                </span>
                <span className="flex items-center gap-1 text-sm text-gray-600 dark:text-slate-400">
                  <Calendar className="w-4 h-4" />
                  {formatId(task.createdAt)}
                </span>
                <button
                  onClick={() => handleEdit(task.id)}
                  className="text-sm px-3 py-1.5 rounded-md bg-blue-100 hover:bg-blue-200 transition-colors text-blue-700 cursor-pointer"
                >
                  Edit task
                </button>
              </div>
            </div>
          </div>
          <button
            className="cursor-pointer ml-auto pl-6"
            onClick={() => handleDeleteClick(task.id)}
          >
            <Trash2 className="w-4 h-4 lg:w-5 lg:h-5" />
          </button>
        </div>
      </div>
    </>
  );
}

export default TaskItem;
