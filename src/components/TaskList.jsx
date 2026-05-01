import { useState } from "react";
import TaskItem from "./TaskItem";
import EditModal from "./editModal";
import { ClipboardList } from "lucide-react";

function TaskList({ filteredTasks, toggleTask, deleteTask, setTasks }) {
  const formatId = (timestamp) =>
    new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const [editText, setEditText] = useState("");
  const [editCategory, setEditCategory] = useState("school");

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
                handleEdit={handleEdit}
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
        </div>
      </div>
    </>
  );
}

export default TaskList;
