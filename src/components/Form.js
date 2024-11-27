import React, { useState } from "react";

export default function Form({ onAddTask }) {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    // TODO: write code to handle form submission
    e.preventDefault()
    const newTask = { id: Date.now(), description: description }
    if (description !== "") {
      onAddTask(newTask)
    }

    setDescription("");
  }

  return (
    /*TODO: add a form to add a new task*/
    <form onSubmit={handleSubmit}>
       <input type="text" placeholder="Add Task" value={description} onChange={(e) => setDescription(e.target.value)} />
       <button>Submit</button>
    </form>
  );
};

