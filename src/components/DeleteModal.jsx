function DeleteModal({ onCancel, onConfirm }) {
  return (
    <div className="bg-black/50 fixed inset-0 flex items-center justify-center z-50 px-5 ">
      <div className="bg-white p-8 max-w-xl w-full lg:max-w-md rounded-2xl flex flex-col justify-center items-center ">
        <p className="text-gray-500 text-center">
          Are you sure you want to delete this task?
        </p>
        <div className="flex gap-2 mt-3">
          <button
            className="bg-red-500 hover:bg-red-600 border px-3 py-1.5 text-[16px] rounded-md text-white cursor-pointer hover:shadow-2xl"
            onClick={onConfirm}
          >
            Delete
          </button>
          <button
            className="cursor-pointer rounded-md px-3 py-1.5 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
