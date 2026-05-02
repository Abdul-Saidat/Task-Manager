export const getProgress = (tasks) => {
    if (tasks.length === 0) return 0;
    const completed = tasks.filter(t => t.completed).length
    return Math.round((completed / tasks.length) * 100)
}