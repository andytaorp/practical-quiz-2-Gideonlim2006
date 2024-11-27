import React, { useState } from "react";
import Form from "./Form";
import TaskList from "./TaskList";
import Task from "./Task";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    // TODO: write code to add a new task
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleToggleTask = (id) => {
    // TODO: write code to toggle a task's status
    setTasks((prevTasks) =>
    prevTasks.map((task) =>
    task.id === id ? { ...task, packed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    // TODO: write code to delete a task
    setTasks((prevTasks) => prevTasks.filter((task, i) => i !== id));
  };

  return (
    <div className="app">
      <h1>Task Tracker</h1>
      {/*TODO: add a form to add a new task*/}
      <Form onAddTask={handleAddTask} />
      {/*TODO: add a list of tasks*/}
      <TaskList tasks={tasks} onToggleTask={handleToggleTask} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
