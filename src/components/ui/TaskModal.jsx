import { useState } from "react";

function AddTaskModal({
  onClose,
  addTask,
  categories = ["work", "personal", "school"],
  defaultCategory = categories[0],
  submitLabel = "Add Task",
}) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(defaultCategory);

  return (
    <div id="modal" className="bg-black/50 fixed inset-0 flex items-center justify-center z-50 px-5">
      <div className="bg-white p-8 max-w-xl w-full lg:max-w-md rounded-2xl">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!text.trim()) return;
            addTask(text, category);
            setText("");
            setCategory(defaultCategory);
            onClose();
          }}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="text" className="text-sm text-[#444] font-medium">
              Text:
            </label>
            <input
              id="text"
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
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm capitalize transition ${
                    category === cat
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={onClose}
              // className="px-2 py-1 rounded-md bg-transparent text-gray-500 hover:text-gray-700 cursor-pointer"
            className="cursor-pointer rounded-md px-3 py-1.5 hover:bg-gray-100 text-gray-700"

            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-black border px-3 py-1.5 text-[16px] rounded-md text-white cursor-pointer hover:shadow-2xl"
            >
              {submitLabel}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTaskModal;
