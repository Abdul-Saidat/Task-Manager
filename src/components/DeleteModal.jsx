function DeleteModal({onCancel, onConfirm}) {
    return (
    <div className="bg-black/50 fixed inset-0 flex items-center justify-center z-50 px-5 ">
      <div className="bg-white p-8 max-w-xl w-full lg:max-w-md rounded-2xl ">
        <button onClick={onConfirm}>Delete</button>
        <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    )
}

export default DeleteModal;