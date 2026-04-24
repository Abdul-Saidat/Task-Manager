import { useState } from "react";

function TaskForm({ setShowForm, onAddTask }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("school");
  return (
    <div className="bg-black/50 fixed inset-0 flex items-center justify-center z-50 px-5 ">
      <div className="bg-white p-8 max-w-xl w-full lg:max-w-md rounded-2xl ">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            if (!text.trim()) return;
            onAddTask(text, category);
            setText("");
            setCategory("");
            setShowForm(false);
          }}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="text" className="text-sm text-[#444] font-medium">
              Text:
            </label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full border px-2 py-1 ml-1 rounded-lg outline-none"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="category"
              className="text-sm text-[#444] font-medium"
            >
              Category:
            </label>
            <div className="ml-1 flex gap-2">
              {["work", "personal", "school"].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm capitalize transition
        ${
          category === cat ? "bg-black text-white" : "bg-gray-100 text-gray-500"
        }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            <button
              className="px-2 py-1 rounded-md bg-transparent text-gray-500 hover:text-gray-700 cursor-pointer"
              onClick={() => setShowForm(false)}
              type="button"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="border px-2 py-1 text-[12px] lg:text-[16px] rounded-md bg-black text-white cursor-pointer hover:shadow-2xl"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
