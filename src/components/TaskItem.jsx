import { Trash2 } from "lucide-react";
import { Calendar } from "lucide-react";

function TaskItem({ task, toggleTask, deleteTask, formatId }) {
  return (
    <>
      <div key={task.id}>
        <div className="px-4 lg:px-6 py-7 flex hover:bg-[#f9fafc]">
          <div className="flex items-start">
            <input
              type="checkbox"
              className="border border-gray-500 mr-2 lg:mr-4 mt-1.5 checked:bg-black text-white cursor-pointer rounded-full w-4 h-4 lg:h-5 lg:w-5 accent-black"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <div className="flex flex-col gap-0.5 text-gray-600">
              <span
                className={`${task.completed ? "line-through text-gray-200" : "none"} text-[18px] lg:text-xl font-semibold`}
              >
                {task.text}
              </span>
              <div className="flex flex-wrap gap-3">
                <span className="text-[12px] px-3 py-1 rounded-full bg-[#a5c7f5] font-bold text-blue-600">
                  {task.category}
                </span>
                <span className="flex items-center justify-center gap-1 text-[14px]">
                  <Calendar className="w-4 h-4" />
                  {formatId(task.createdAt)}
                </span>
              </div>
            </div>
          </div>
          <button
            className="cursor-pointer ml-auto pl-6"
            onClick={() => deleteTask(task.id)}
          >
            <Trash2 className="w-4 h-4 lg:w-5 lg:h-5" />
          </button>
        </div>
      </div>
    </>
  );
}

export default TaskItem;
