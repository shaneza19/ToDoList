import React, { useState } from "react";

function TaskInput({ addTask }) {
  const [taskText, setTaskText] = useState("");

  const handleInputChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleAddTask = () => {
    if (taskText.trim() !== "") {
      addTask(taskText);
      setTaskText("");
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Add a new task..."
        value={taskText}
        onChange={handleInputChange}
      />
      <button
        style={{
          marginLeft: "4px",
        }}
        onClick={handleAddTask}
      >
        Add
      </button>
    </div>
  );
}

export default TaskInput;
