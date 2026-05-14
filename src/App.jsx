import { useEffect, useState } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import HeroSection from "./sections/HeroSection";
import DashboardSection from "./sections/DashboardSection";
import TaskSection from "./sections/TaskSection";
import Email from "./components/Email";
import PricingSection from "./components/pricing/PricingSection";
import { useTasks } from "./components/hooks/useTasks";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("")
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const taskData = useTasks()

  return (
    <>
      <ToastContainer />
      <main className="mx-auto max-w-275 px-4 py-8">
        <HeroSection showForm={showForm} setShowForm={setShowForm} />
        <section className="mt-10 mb-10">
        <DashboardSection {...taskData} />
        </section>
        <TaskSection showForm={showForm} setShowForm={setShowForm} {...taskData} />
        <Email />
        <section id="pricing">
          <PricingSection />
        </section>
      </main>
    </>
  );
}

export default App;
