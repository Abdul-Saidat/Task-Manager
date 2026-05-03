import { ClipboardList } from "lucide-react";
import TaskItem from "./TaskItem";

function TaskList({
  filteredTasks,
  toggleTask,
  deleteTask,
  handleEdit,
  handleDeleteClick,
  filter,
  setFilter
}) {
  const formatId = (timestamp) =>
    new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <>
      <div className="">
        <h2 className="text-xl lg:text-3xl font-bold text-center mb-6 mt-8">Your tasks</h2>
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
              <div className="w-[1px] bg-gray-300 h-5 mx-1 self-center" />
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

        {filteredTasks.length === 0 && (
          <div className="flex flex-col items-center justify-center mt-3">
            <ClipboardList size={40} className="text-gray-300 mb-2" />
            <p className="text-[#999] text-center">
              No tasks yet.
              <br /> Add one to get started!
            </p>
          </div>
        )}

        <div className="w-full flex flex-col bg-white border border-[#e6e9ed] rounded-2xl shadow-md mt-5 ">
          {filteredTasks.map((task, index) => (
            <div key={task.id}>
              <TaskItem
                handleEdit={handleEdit}
                task={task}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
                formatId={formatId}
                handleDeleteClick={handleDeleteClick}
              />
              {index < filteredTasks.length - 1 && (
                <div className="border-t border-[#e6e9ed]" />
              )}
            </div>
          ))}
          {/* {isEditModalOpen && (
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
    {isDeleteModalOpen && <DeleteModal onCancel={() => setIsDeleteModalOpen(false)} onConfirm={confirmDelete} />} */}
        </div>
      </div>
    </>
  );
}

export default TaskList;
