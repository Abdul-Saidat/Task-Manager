import { useState } from "react";
import { useTasks } from "../components/hooks/useTasks";
import TaskList from "../components/tasks/TaskList";
import TaskForm from "../components/tasks/TaskForm";
import EditModal from "../components/editModal";
import DeleteModal from "../components/DeleteModal";
import AddForm from "../components/ui/TaskModal";
import TaskStats from "../components/stats/Stats";

function TaskSection({ showForm, setShowForm }) {
  const {
    completedTasks,
    tasks,
    addTask,
    saveEditedTask,
    deleteTask,
    filteredTasks,
    toggleTask,
    filter,
    setFilter,
  } = useTasks();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const [editText, setEditText] = useState("");
  const [editCategory, setEditCategory] = useState("school");
  const [taskToDelete, setTaskToDelete] = useState(null);

  const handleEdit = (id) => {
    const selectedTask = filteredTasks.find((task) => task.id === id);

    setEditTask(selectedTask);
    setEditText(selectedTask.text);
    setEditCategory(selectedTask.category);
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = () => {
    saveEditedTask(editTask.id, editText, editCategory);
    setIsEditModalOpen(false);
  };

  const handleDeleteClick = (id) => {
    setTaskToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    deleteTask(taskToDelete);
    setIsDeleteModalOpen(false);
    setTaskToDelete(null);
  };

  return (
    <>
      {showForm && (
        <AddForm addTask={addTask} onClose={() => setShowForm(false)} />
      )}
      {isEditModalOpen && (
        <EditModal
          setIsEditModalOpen={setIsEditModalOpen}
          editText={editText}
          editTask={editTask}
          setEditText={setEditText}
          editCategory={editCategory}
          setEditCategory={setEditCategory}
          saveEditedTask={handleSaveEdit}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteModal
          onCancel={() => setIsDeleteModalOpen(false)}
          onConfirm={confirmDelete}
        />
      )}
      <TaskStats tasks={tasks} completedTasks={completedTasks} />
      <TaskList
        filter={filter}
        setFilter={setFilter}
        filteredTasks={filteredTasks}
        toggleTask={toggleTask}
        handleDeleteClick={handleDeleteClick}
        handleEdit={handleEdit}
      />
    </>
  );
}

export default TaskSection;
