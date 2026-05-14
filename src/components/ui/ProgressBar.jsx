const ProgressBar = ({ percentage }) => {
  return (
    <div className="w-full dark:bg-slate-100 bg-gray-200 rounded-full h-3">
      <div
        className="dark:bg-indigo-500 bg-indigo-500 h-3 rounded-full transition-all duration-300"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
