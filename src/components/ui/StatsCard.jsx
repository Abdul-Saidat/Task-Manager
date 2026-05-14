import ProgressBar from "../ui/ProgressBar";
function StatsCard({ title, stats, icon }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <span> {icon} </span>
        <h3 className="text-xl font-bold"> {title}</h3>
      </div>
      <p className="dark:text-black text-[#7376B2] text-[14px] mb-1">
        {stats.total === 1 ? `${stats.total} task` : `${stats.total} tasks`}
      </p>
      <div className="flex items-center gap-2 text-sm">
        <p className="dark:text-black text-[#7376B2]">Progress</p>
        <p className="dark:text-black text-[#7376B2] ml-auto">
          {stats.completed === 0 ? 0 : (stats.completed / stats.total) * 100}%
        </p>
      </div>
      <ProgressBar
        percentage={
          stats.completed === 0 ? 0 : (stats.completed / stats.total) * 100
        }
      />
      <p className="dark:text-black text-[#7376B2] text-[14px]">
        {stats.completed === 0
          ? "No completed tasks yet"
          : `${stats.completed} of ${stats.total} completed`}
      </p>
    </div>
  );
}

export default StatsCard;
