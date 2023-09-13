import React from "react";

function TaskList({ tasks, removeTask, toggleComplete }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id}>
          <span>
            {task.text}
          </span>

          <button
            className={task.completed ? "completed" : "unfinished"}
            onClick={() => toggleComplete(task.id)}
          >
            <span>{task.completed ? "Completed" : "Unfinished"}</span>
          </button>

          <button className={"delete"} onClick={() => removeTask(task.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
