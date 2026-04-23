import TaskItem from "./TaskItem";

function TaskList({ filteredTasks, toggleTask, deleteTask }) {
  const formatId = (timestamp) =>
    new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  return (
    <>
      <div className="mt-8">
        <div className="w-full flex flex-col gap-4 bg-white border border-[#e6e9ed] rounded-2xl ">
          {filteredTasks.length === 0 && (
            <p>No tasks yet. Add one to get started!</p>
          )}
          {filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
              formatId={formatId}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default TaskList;
