// import { useState } from 'react'
import { useEffect, useState } from "react";
import "./App.css";
// import { AddTask } from "./components/addTask";

function App() {
  const [showForm, setShowForm] = useState(false)
  const [text, setText] = useState("")
  const [category,setCategory] = useState("")

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks")
    return saved ? JSON.parse(saved) : []
  }
    //  {
      // id: 1,
      // id: "",
      // text: "",
      // category: "",
      // completed: false,
    // }
    // {
    //   id: 2,
    //   // id: Date.now(),
    //   text: "Study nesix codebase",
    //   category: "personal",
    //   completed: false,
    // },
    // {
    //   id: 3,
    //   // id: Date.now(),
    //   text: "Study nesix codebase",
    //   category: "personal",
    //   completed: false,
    // },
  )
  useEffect(() => {

    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])
  const Tasks = [
    {
      // id: 1,
      id: 1,
      text: "Study nesix codebase",
      category: "personal",
      completed: false,
    },
    {
      id: 2,
      // id: Date.now(),
      text: "Study nesix codebase",
      category: "personal",
      completed: false,
    },
    {
      id: 3,
      // id: Date.now(),
      text: "Study nesix codebase",
      category: "personal",
      completed: false,
    },
  ];

function showModal() {
  console.log('clickedd');
  setShowForm(!showForm)
  }
const addTask = () => {
  // if () return;

}
const formatId = (timestamp) =>
  new Date(timestamp).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

formatId(1776910715530); // "April 23, 2026"
  return (
    <>
    {/* <AddTask /> */}

     {showForm &&  (
    <div className="bg-black/50 fixed inset-0 flex items-center justify-center z-50 ">
     <div className="bg-red-200 p-6 rounded-md ">
      <form action="" className="flex flex-col gap-3" >
        <div>
            <label htmlFor="text">Text</label> <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div>
           <label htmlFor="category"> Category: </label> <select name="category" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Work">Work</option>
            <option value="school">School</option>
            <option value="personal">Personal</option>
           </select>
        </div>
        <div className="flex gap-2">

           <button className="border-2" onClick={() => setShowForm(!showForm)}>Cancel</button>
           <button className="border-2" onClick={() => { if (!text.trim()) return
             {setTasks(prev => [...prev, {id: formatId(Date.now()), text, category}])}}}>Add Task</button>
        </div>
      </form>
    </div>
        </div>)}
      <section className="px-5 py-6 relative">
        
        <header className="text-4xl"> Task Manager </header>
        <p>Organize your day, achieve your goals.</p>
        <button onClick={showModal} className="px-5 py-3 mt-10 bg-black text-white rounded-xl cursor-pointer">
          Add task
        </button>
        {/* category + tasklist */}
        <div className="mt-8">
          <div className="flex gap-3">
            <button className="px-3 py-2 bg-black text-white rounded-md cursor-pointer">
              All
            </button>
            <button className="px-3 py-2 bg-black text-white rounded-md cursor-pointer">
              Completed
            </button>
            <button className="px-3 py-2 bg-black text-white rounded-md cursor-pointer">
              Work
            </button>
            <button className="px-3 py-2 bg-black text-white rounded-md cursor-pointer">
              Personal
            </button>
            <button className="px-3 py-2 bg-black text-white rounded-md cursor-pointer">
              School
            </button>
          </div>
        </div>

        {/* Task list section */}
        <div className="mt-8">
          <ul className="list-none">
            <div className="w-full">
              {/* <div></div> */}
                         
              {tasks.map(task => (
                <>
                <div className="w-full">

                  <li key={task.id} className="mt-5 bg-green-100 px-5 py-10 rounded-lg w-full">
                    <input
                      type="checkbox"
                      className="rounded-full h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    {task.text}
                  {/* {setTasks(Tasks.map(task => (

                  )))} */}
                  <div>

                    <span className="text-[12px] px-5 py-1 rounded-full bg-green-200"> {task.category}</span>
                  <span> {task.id} </span> 
                  </div>
                  </li>
                </div>
                </>            
              ))}
                </div>
                </ul>
                </div>
              
             
      </section>
    </>
  );
}

export default App;
