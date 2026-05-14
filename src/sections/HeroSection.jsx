import QuoteBox from "../components/ui/QuoteBox";
import { Plus } from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";

function HeroSection({ setShowForm }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <header className="dark:text-white text-4xl lg:text-5xl font-bold tracking-tight">
          Task Manager
        </header>
        <p className="dark:text-white/80 mt-2 text-gray-600 max-w-sm">
          Organize your day, achieve your goals.
        </p>

        <button
          onClick={() => setShowForm(true)}
          className="  px-3 lg:px-5 py-3 mt-5 text-sm lg:text-base w-fit flex items-center justify-center gap-1 bg-black text-white rounded-xl cursor-pointer hover:shadow-md hover:bg-black/90"
        >
          <Plus className="w-4 h-4 lg:h-5 lg:w-5" />
          Add task
        </button>
      </div>
      <ThemeToggle />

      <section className="min-h-45 text-center px-5 py-7 rounded-2xl shadow-md bg-[#cfdfeb] flex flex-col justify-center">
        <QuoteBox />
      </section>
    </section>
  );
}

export default HeroSection;
