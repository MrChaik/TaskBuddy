import React, { useState } from 'react'

export default function TaskForm({addTask}) {
    let[task, setTask] = useState("");
    let[priority, setPriority] = useState("High");
    let[category, setCategory] = useState("General");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(task.trim() === "") {
            alert("Please enter a task");
            return;
        }
        addTask({text:task, priority, category, completed:false})
        setTask("");
        setPriority("High");
        setCategory("General");
    }
  return (
    <div>
      <form className ='task-form' onSubmit = {handleSubmit}>
        <div id='inp'>
            <input type="text" placeholder="Enter the task" value={task} onChange={(e) =>setTask(e.target.value)}/>
            <span><button type = "submit">Add Task</button></span>
            <h1>{task}{priority}{category}</h1>
        </div>
        <div id='btns'>
            <select onChange={(e) => setPriority(e.target.value)}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <select onChange = {(e) => setCategory(e.target.value)}>
                <option value="General">General</option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
            </select>
        </div>
      </form>
    </div>
  )
}
