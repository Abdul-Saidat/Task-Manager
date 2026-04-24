import TaskItem from "./TaskItem";
import { ClipboardList } from "lucide-react";

function TaskList({ filteredTasks, toggleTask, deleteTask }) {
  const formatId = (timestamp) =>
    new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  return (
    <>
      <div className="">
        {filteredTasks.length === 0 && (
          <div className="flex flex-col items-center justify-center">
            <ClipboardList size={40} className="text-gray-300 mb-2" />
            <p className="text-[#999] text-center">
              No tasks yet.
              <br /> Add one to get started!
            </p>
          </div>
        )}

        <div className="w-full flex flex-col bg-white border border-[#e6e9ed] rounded-2xl shadow-md ">
          {filteredTasks.map((task, index) => (
            <div key={task.id}>
              <TaskItem
                task={task}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
                formatId={formatId}
              />
              {index < filteredTasks.length - 1 && (
                <div className="border-t border-[#e6e9ed]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TaskList;
