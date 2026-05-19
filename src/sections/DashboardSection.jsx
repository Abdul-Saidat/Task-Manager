const DashboardSection = ({ completedTasks, tasks }) => {
  // const {completedTasks, tasks} = useTasks()

  return (
    <>
      <h2 className="dark:text-gray-100 text-xl lg:text-3xl font-semibold text-center mb-1 lg:mb-5 mt-6">
        Dashboard Overview
      </h2>
      {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"> */}
      <div className="w-full flex flex-wrap gap-3">
        <div className="flex-1 min-w-[45%] bg-red-100 p-4 rounded-2xl shadow-md flex flex-col gap-2">
          <span className="text-red-500">TOTAL</span>
          <span className="text-2xl lg:text-3xl font-semibold">
            {tasks.length}
          </span>
          <span className="text-sm">All tasks</span>
        </div>
        <div className="flex-1 min-w-[45%] bg-blue-100 p-4 rounded-2xl shadow-md flex flex-col gap-2">
          <span className="text-blue-500"> COMPLETED</span>
          <span className="text-2xl lg:text-3xl font-semibold">
            {completedTasks.length}
          </span>
          <span className="text-sm">Tasks done</span>
        </div>
        <div className="flex-1 min-w-[45%] bg-green-100 p-4 rounded-2xl shadow-md flex flex-col gap-2">
          <span className="text-green-500"> PENDING</span>
          <span className="text-2xl lg:text-3xl font-semibold">
            {tasks.length - completedTasks.length}
          </span>
          <span className="text-sm">
            {tasks.length - completedTasks.length == 1 ? "Task" : "Tasks"} to do
          </span>
        </div>
        <div className="flex-1 min-w-[45%] bg-pink-100 p-4 rounded-2xl shadow-md flex flex-col gap-2">
          <span className="text-pink-500">COMPLETION RATE</span>
          <span className="text-2xl lg:text-3xl font-semibold">
            {completedTasks.length == 0
              ? 0
              : ((completedTasks.length / tasks.length) * 100).toFixed()}
            %{/* {(completedTasks.length / tasks.length) * 100}% */}
          </span>
          <span className="text-sm">Overall completion</span>
        </div>
      </div>
    </>
  );
};

export default DashboardSection;
