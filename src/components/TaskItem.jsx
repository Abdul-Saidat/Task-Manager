import { Trash2 } from "lucide-react";
import { Calendar } from "lucide-react";

function TaskItem({ task, toggleTask, deleteTask, formatId }) {
  return (
    <>
    {/* <section className="bg-blue-500 flex "> */}

      <div className="" key={task.id}>
        <div className=" ">

        <div className="px-6 py-7 shadow-md w-full flex hover:bg-[#f9fafc]">
          <div className="flex items-start">
            <input
              type="checkbox"
              className="border border-gray-500 mr-3 lg:mr-4 mt-1.5 checked:bg-black text-white cursor-pointer rounded-full h-5 w-5 accent-black"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              />
            <div className="flex flex-col gap-0.5 text-gray-600">
              <span className={`${task.completed ? "line-through text-gray-200" : "none"} lg:text-xl font-semibold`}>
                {task.text}
              </span>
              <div className="flex gap-3">
              <span className="text-[12px] px-3 py-1 rounded-full bg-[#a5c7f5] font-bold text-blue-600">
                {task.category}
              </span>
              <span className="flex items-center justify-center gap-1"> <Calendar className="w-4 h-4" /> {formatId(task.createdAt)} </span>
              </div>
            </div>
          </div>
          <button
            className="cursor-pointer ml-auto pl-6"
            onClick={() => deleteTask(task.id)}
            >
                <Trash2 className="w-5 h-5" />
          </button>
        </div>
              </div>
      </div>
    {/* </section> */}
    </>
  );
}

export default TaskItem;
