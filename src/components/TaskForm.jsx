import { useState } from "react";

function TaskForm({ setShowForm, onAddTask}) {
    const [text, setText] = useState("");
     const [category, setCategory] = useState("school");
    return(

        <div className="bg-black/50 fixed inset-0 flex items-center justify-center z-50 ">
          <div className="bg-red-200 p-6 rounded-md ">
            <form
              action=""
              onSubmit={(e) => {
                  e.preventDefault();
                   if (!text.trim()) return;
                  onAddTask(text, category)
                  setText("")
                    setCategory("")
                    setShowForm(false)
                }}
                  
                className="flex flex-col gap-3"
                >
              <div>
                <label htmlFor="text">Text</label>{" "}
                <input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  />
              </div>
              <div>
                <label htmlFor="category"> Category: </label>{" "}
                <select
                  name="category"
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  >
                  <option value="work">Work</option>
                  <option value="school">School</option>
                  <option value="personal">Personal</option>
                </select>
              </div>
              <div className="flex gap-2">
                <button
                  className="border-2"
                  onClick={() => setShowForm(false)}
                  type="button"
                  >
                  Cancel
                </button>
                <button type="submit" className="border-2">Add Task</button>
              </div>
            </form>
          </div>
        </div>
)
}

export default TaskForm;