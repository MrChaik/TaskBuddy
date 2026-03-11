export default function ProgressTracker({tasks}) {
  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
  
  return (
    <div className="progress-tracker">
      <h2>Progress Tracker</h2>
      <p>Completed: {completedTasks} / {totalTasks}</p>
      <div className="progress-bar-container">
        <div className="progress-bar-fill" style={{width: `${progress}%`}}>
          {totalTasks > 0 && `${progress.toFixed(0)}%`}
        </div>
      </div>
    </div>
  )
}