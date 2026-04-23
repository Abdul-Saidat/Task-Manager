import { Trash2 } from "lucide-react";
import { Calendar } from "lucide-react";

function TaskItem({ task, toggleTask, deleteTask, formatId }) {
  return (
    <>
    {/* <section className="bg-blue-500 flex "> */}

      <div className="" key={task.id}>
        <div className=" ">

        <div className="px-5 py-10 border border-l-0 border-r-0 border-t-0 border-b-[#e6e9ed] w-full flex justify-between items-start hover:bg-[#f9fafc]">
          <div className="flex items-start">
            <input
              type="checkbox"
              className="border border-gray-500 mr-5 checked:bg-black text-white cursor-pointer rounded-full appearance-none h-5 w-5 accent-black"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              />
            <div className="flex flex-col">
              <span className={task.completed ? "line-through" : "none"}>
                {task.text}
              </span>
              <div className="flex">

              <span className="text-[12px] px-5 py-1 rounded-full bg-green-200">
                {task.category}
              </span>
              <span className="flex items-center justify-center gap-1"> <Calendar className="w-4 h-4" /> {formatId(task.createdAt)} </span>
              </div>
            </div>
          </div>
          <button
            className="cursor-pointer"
            onClick={() => deleteTask(task.id)}
            >
                <Trash2 />
            Delete
          </button>
        </div>
              </div>
      </div>
    {/* </section> */}
    </>
  );
}

export default TaskItem;
