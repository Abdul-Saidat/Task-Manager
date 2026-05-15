function EditModal({
  setIsEditModalOpen,
  editText,
  setEditText,
  editCategory,
  setEditCategory,
  saveEditedTask,
}) {
  return (
    <div className="bg-black/50 fixed inset-0 flex items-center justify-center z-50 px-5 ">
      <div className="dark:bg-slate-800 dark:text-white bg-white p-8 max-w-xl w-full lg:max-w-md rounded-2xl dark:border dark:border-slate-600">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            saveEditedTask();
          }}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1">
            <label
              htmlFor="text"
              className="dark:text-white text-sm text-[#444] font-medium"
            >
              Text:
            </label>
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="w-full border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 px-2 py-1 ml-1 rounded-lg outline-none"
              //  className="border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="category"
              className="text-sm dark:text-white text-[#444] font-medium"
            >
              Category:
            </label>
            <div className="ml-1 flex gap-2">
              {["work", "personal", "school"].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setEditCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm capitalize transition
        ${
          editCategory === cat
            ? "bg-black dark:bg-slate-500 text-white"
            : "bg-gray-100 text-gray-500 dark:border dark:border-slate-500"
        }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            <button
              // className="px-2 py-1 rounded-md bg-transparent text-gray-500 hover:text-gray-700 cursor-pointer"
              className="cursor-pointer rounded-md px-3 py-1.5 hover:bg-gray-100 text-gray-700 dark:text-white dark:hover:bg-gray-300 dark:hover:text-slate-800"
              onClick={() => setIsEditModalOpen(false)}
              type="button"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-black dark:bg-blue-600 hover:bg-blue-700 px-3 py-1.5 text-[16px] rounded-md text-white cursor-pointer hover:shadow-2xl"
            >
              Edit Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditModal;
