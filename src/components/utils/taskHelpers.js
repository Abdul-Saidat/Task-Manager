export const getProgress = (tasks) => {
  if (tasks.length === 0) return 0;
  const completed = tasks.filter((t) => t.completed).length;
  return Math.round((completed / tasks.length) * 100);
};

export const getCategoryStats = (tasks, category) => {
  const total = tasks.filter((task) => task.category === category).length;

  const completed = tasks.filter(
    (task) => task.category === category && task.completed,
  ).length;

  return { total, completed };
};
