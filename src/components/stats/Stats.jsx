import ProgressBar from "../ui/ProgressBar";
import { getCategoryStats } from "../utils/taskHelpers";
import StatsCard from "../ui/StatsCard";
import { getProgress } from "../utils/taskHelpers";
import { GraduationCap } from "lucide-react";
import { Icon } from "@iconify/react";

function TaskStats({ completedTasks, tasks }) {
  const percentage = getProgress(tasks);
  const work = getCategoryStats(tasks, "work");

  const school = getCategoryStats(tasks, "school");

  const personal = getCategoryStats(tasks, "personal");
  return (
    <>
      <section className="mt-10">
        <div className="dark:bg-slate-500 dark:border-slate-600 w-full px-5 py-5 rounded-md border border-blue-100 shadow-md">
          <div className="flex items-center gap-2 mb-3">
            <Icon
              icon="mdi:clipboard-check"
              width="22"
              className="dark:text-white"
            />
            <h2 className="dark:text-gray-100 text-xl lg:text-2xl font-semibold">
              Overall Progress
            </h2>
          </div>
          <p className="dark:text-black text-[#7376B2] text-sm mt-2">
            <span className="">{completedTasks.length} </span>
            of
            <span className=""> {tasks.length} </span>
            {tasks.length === 1 ? "task" : "tasks"} completed
          </p>
          <ProgressBar percentage={percentage} />
          <div className="flex justify-between mt-5">
            <p className="dark:text-black text-[#7376B2] text-sm">
              {percentage}% Completed
            </p>
            <p className="dark:text-blacktext-[#7376B2] text-sm">
              {tasks.length - completedTasks.length === 0
                ? "No tasks left"
                : `${tasks.length - completedTasks.length} left`}
            </p>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className="flex items-center gap-2 mb-2">
          <Icon icon="mdi:view-grid" width="20" className="dark:text-white" />
          <h2 className="dark:text-gray-100 text-xl font-semibold">
            Categories
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-2">
          <div className="dark:bg-slate-500 dark:border-slate-600 dark:text-gray-100 w-full px-3 py-5 lg:p-5 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition">
            <StatsCard
              icon={<Icon icon="twemoji:briefcase" width="20" />}
              title="Work"
              stats={work}
            />
          </div>
          <div className="dark:bg-slate-500 dark:border-slate-600 dark:text-gray-100 w-full px-3 py-5 lg:p-5 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition">
            <StatsCard
              icon={<Icon icon="twemoji:school" width="20" />}
              title="School"
              stats={school}
            />
          </div>
          <div className="dark:bg-slate-500 dark:border-slate-600 dark:text-gray-100 w-full px-3 py-5 lg:p-5 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition">
            <StatsCard
              icon={<Icon icon="twemoji:sparkling-heart" width="20" />}
              title="Personal"
              stats={personal}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default TaskStats;
