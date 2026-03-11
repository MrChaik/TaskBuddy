import React, {useState, useEffect}  from 'react'
import './Style.css'
import TaskForm from './Components/TaskForm'
import TaskList from './Components/TaskList'
import ProgressTracker from './Components/ProgressTracker'
export default function App() {
  const[tasks, setTasks] = useState([]);
  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  });
  const addTask = (task) => {
    setTasks([...tasks,task]);//...tasks is used to create a new array that includes all the existing tasks, 
    // and then the new task is added to the end of that array. This way, we are not mutating the 
    // original tasks array but creating a new one with the added task.
  }

  const updateTask = (updatedTask, index) => {
    const newTask = [...tasks];
    newTask[index] = updatedTask;
    setTasks(newTask);
  }

  const deleteTask = (index) => {
  setTasks(tasks.filter((_, i) => i !== index)); // This line creates a new array that includes all tasks except the one at the specified index. 
  // The filter method iterates through the tasks array and includes only those tasks whose index (i) 
  // does not match the index of the task to be deleted. The resulting array is then set as the new state for tasks, '
  // effectively removing the specified task from the list.
  }

  const clearTasks = () => {
    setTasks([]);// This line sets the tasks state to an empty array, effectively clearing all tasks from the list.
  }

  return (
    <div>
      <header>
        <h1>TaskBuddy</h1>
        <p><i>Your friendly Task Manager</i></p>
      </header>
      <TaskForm  addTask = {addTask}/>
      <TaskList  tasks = {tasks} updateTask ={updateTask} deleteTask = {deleteTask}/>
     <ProgressTracker tasks={tasks} />
      {tasks.length > 0 && <button onClick={clearTasks}>Clear all tasks</button>}
    </div>
  )
}
