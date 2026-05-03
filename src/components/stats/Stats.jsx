import ProgressBar from "../ui/ProgressBar";
import { getCategoryStats } from "../utils/taskHelpers";
import StatsCard from "../ui/StatsCard";
import { getProgress } from "../utils/taskHelpers";


function TaskStats({completedTasks, tasks}) {
    const percentage =  getProgress(tasks);
       const work = getCategoryStats(tasks, "work");

  const school = getCategoryStats(tasks, "school");

  const personal = getCategoryStats(tasks, "personal");
    // const {getCategoryStats, percentage, completedTasks, tasks} = useTasks()

    return(
        <>
          <section className="mt-10">
            <div className="w-full px-5 py-5 rounded-md border border-blue-100 shadow-md">
              <header>Overall Progress</header>
              <p className="text-[#7376B2] text-sm mt-2">
                <span className="">{completedTasks.length} </span>
                of
                <span className=""> {tasks.length}</span> tasks completed{" "}
              </p>
              <ProgressBar percentage={percentage} />
              <div className="flex justify-between mt-5">
                <p className="text-[#7376B2] text-sm">
                  {percentage}% Complete
                </p>
                <p className="text-[#7376B2] text-sm">
                  {tasks.length - completedTasks.length} task(s) remaining{" "}
                </p>
              </div>
            </div>

          </section>
            {/* <div className="mt-10 "> */}
                {/* <div className="flex flex-col md:flex-row gap-4 mt-2"> */}
                 <section className="mt-10">
                <h2>Categories</h2>
            <div className="flex flex-col md:flex-row gap-4 mt-2">
              <div className="w-full px-3 py-5 lg:p-5 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition">
            <StatsCard title="Work" stats={work} />
              </div>
              <div className="w-full px-3 py-5 lg:p-5 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition">

            <StatsCard title="School" stats={school} />
            </div>
              <div className="w-full px-3 py-5 lg:p-5 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition">

            <StatsCard title="Personal" stats={personal} />
            </div>
                </div>
                </section>
            {/* </div> */}
        </>
    )
}

export default TaskStats;