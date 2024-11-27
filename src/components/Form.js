import React, { useState } from "react";

export default function Form({ onAddTask }) {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    // TODO: write code to handle form submission
    e.preventDefault()
    const newTask = { id: Date.now(), description: description, completed: false }
    if (description !== "") {
      onAddTask(newTask)
    }

    setDescription("");
  }

  return (
    /*TODO: add a form to add a new task*/
    <form onSubmit={handleSubmit}>
       <input type="text" placeholder="New Task" value={description} onChange={(e) => setDescription(e.target.value)} />
       <button>Add Task</button>
    </form>
  );
};

