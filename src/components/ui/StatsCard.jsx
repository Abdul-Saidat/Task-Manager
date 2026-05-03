import ProgressBar from "../ui/ProgressBar";
function StatsCard({ title, stats }) {
  return (
    <div>
      <p className="lg:text-xl font-medium">{title}</p>
      <p className="text-[#7376B2] text-[14px]">{stats.total} task(s)</p>
      <div className="flex justify-between">
        <p className="text-[#7376B2] text-[14px] mt-2">Progress</p>
        <p className="text-[#7376B2] text-[14px]">
          {stats.completed === 0 ? 0 : (stats.completed / stats.total) * 100}%
        </p>
      </div>
      <ProgressBar
        percentage={
          stats.completed === 0 ? 0 : (stats.completed / stats.total) * 100
        }
      />
      <p className="text-[#7376B2] text-[14px]">
        {stats.completed}/{stats.total} completed
      </p>
    </div>
  );
}

export default StatsCard;
