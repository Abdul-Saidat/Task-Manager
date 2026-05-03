import { useEffect, useState } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import HeroSection from "./sections/HeroSection";
import TaskSection from "./sections/TaskSection";
import Email from "./components/Email";
import PricingSection from "./components/pricing/PricingSection";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <ToastContainer />
      <main className="mx-auto max-w-275 px-4 py-8 bg-[#f5f9fc]">
        <HeroSection showForm={showForm} setShowForm={setShowForm} />
        <TaskSection showForm={showForm} setShowForm={setShowForm} />
        <Email />
        <section id="pricing">
          <PricingSection />
        </section>
      </main>
    </>
  );
}

export default App;
