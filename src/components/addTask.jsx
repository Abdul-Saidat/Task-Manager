export function AddTask() {
    console.log("adding task");
    
    return(

        <>
        <div className="px-5 py-8 bg-red-500 ">
            <label htmlFor="text">Text</label> <input type="text" />
           <label htmlFor="category"> Category: </label> <select name="category" id="category">
            <option value="Work">Work</option>
            <option value="school">School</option>
            <option value="personal">Personal</option>
           </select>
        </div>
        </>
    )
}