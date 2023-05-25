import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./TaskForm.css";

const TaskForm = ({ handleAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [list, setList] = useState("");
  const unique_id = uuid();

  const handleSubmit = (e) => {
    e.preventDefault();

    handleAddTask(unique_id, title, description, list, false, false);

    setTitle("");
    setDescription("");
    setList("");
  };

  return (
    <div className="task-form-container">
      <form onSubmit={handleSubmit}>
        <div className="title-list">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <select
            name="list"
            value={list}
            onChange={(e) => setList(e.target.value)}
            required
          >
            <option value="">Select List</option>
            <option value="Daily Routine">Daily Routine</option>
            <option value="Work Tasks">Work Tasks</option>
            <option value="Personal Tasks">Personal Tasks</option>
            <option value="Groceries">Groceries</option>
            <option value="Study">Study</option>
          </select>
        </div>
        <div className="desc-button">
          <input
            className="desc"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <button type="submit" className="add-task-button">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
