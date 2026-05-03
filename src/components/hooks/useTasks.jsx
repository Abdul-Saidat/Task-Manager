import { useState, useEffect } from "react";

export const useTasks = () => {
  const [filter, setFilter] = useState("all");
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(text, category) {
    const storedDate = Date.now();
    if (!text.trim()) return;

    const newTask = {
      id: storedDate,
      text,
      category,
      completed: false,
      createdAt: storedDate,
    };

    setTasks((prev) => [...prev, newTask]);
  }

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "completed") return task.completed;

    return task.category === filter;
  });

  const completedTasks = tasks.filter((task) => task.completed);

  function saveEditedTask(id, newText, newCategory) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, text: newText, category: newCategory }
          : task,
      ),
    );
  }
  return {
    tasks,
    filter,
    setFilter,

    addTask,
    toggleTask,
    deleteTask,
    saveEditedTask,

    filteredTasks,
    completedTasks,
  };
};
