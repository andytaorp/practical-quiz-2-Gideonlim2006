import React from "react";

/**
 * TODO: implement the Task component
 * @function Task
 * @returns {React.Component} A <li> containing the task description and a checkbox to toggle completion
 */
export default function Task({ task, onToggleTask, onDeleteTask }) {
  let textDecorationStyle;
  
  if (task.completed) {
    textDecorationStyle = "line-through";
  } else {
    textDecorationStyle = "none";
  }

  return (
    <li style={{ textDecoration: textDecorationStyle }}>
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTask(task.id)}
        />
        {task.description}
        <button onClick={() => onDeleteTask(task.id)}>Delete</button>
      </div>
    </li>
  );
}





