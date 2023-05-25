import React, { useState } from "react";
import "./SingleTask.css";

const SingleTask = ({
  task,
  handleEditTask,
  handleDeleteTask,
  handleAddTask,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [list, setList] = useState(task.list);
  const [isCompleted, setIsCompleted] = useState(task.isCompleted);

  const handleDelete = () => {
    handleDeleteTask(task.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
    handleEditTask(task.id);
  };

  const handleSave = () => {
    handleAddTask(task.id, title, description, list, isCompleted, isEditing);
    setIsEditing(false);
  };

  return (
    <div className="single-task">
      <div className="header">
        <input
          type="checkbox"
          className="task-checkbox"
          checked={isCompleted}
          onChange={() => setIsCompleted(!isCompleted)}
        />
        {isEditing ? (
          <input
            type="text"
            className="task-title-input"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h4 className="task-title">{task.title}</h4>
        )}
      </div>
      {isEditing ? (
        <input
          type="text"
          className="task-description-input"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      ) : (
        <p className="task-description">{task.description}</p>
      )}
      <select
        className="task-list-select"
        value={list}
        onChange={(e) => setList(e.target.value)}
        disabled={!isEditing}
      >
        <option value="Daily Routine">Daily Routine</option>
        <option value="Work Tasks">Work Tasks</option>
        <option value="Personal Tasks">Personal Tasks</option>
        <option value="Groceries">Groceries</option>
        <option value="Study">Study</option>
      </select>
      <button
        className={`task-action-button ${
          isEditing ? "save-button" : "edit-button"
        }`}
        onClick={isEditing ? handleSave : handleEdit}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
      <button
        className="task-action-button delete-button"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default SingleTask;
