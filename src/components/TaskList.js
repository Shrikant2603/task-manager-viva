import React, { useState } from "react";
import SingleTask from "./SingleTask";
import TaskForm from "./TaskForm";
import { CSVLink } from "react-csv";
import "./TaskList.css";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const [inputTask, setInputTask] = useState(null);
  const [EditTask, setEditTask] = useState(null);

  const handleAddTask = (
    id,
    title,
    description,
    list,
    isCompleted,
    isEditing
  ) => {
    if (!id || !title || !description || !list) {
      alert("Please fill all the inputs.");
    } else if (inputTask && isEditing) {
      setTasks(
        tasks.map((task) => {
          if (task.id === EditTask) {
            return { ...task, title, description, list, isCompleted };
          }
          return task;
        })
      );
    } else {
      const newTask = {
        id,
        title,
        description,
        list,
        isCompleted,
      };
      setTasks([...tasks, newTask]);
    }
  };

  const handleEditTask = (id) => {
    const newTask = tasks.find((task) => task.id === id);
    setInputTask(newTask);
    setEditTask(id);
  };

  const handleDeleteTask = (taskIndex) => {
    const updatedTasks = tasks.filter((task) => taskIndex !== task.id);
    setTasks(updatedTasks);
  };

  return (
    <div className="task-list-container">
      <TaskForm handleAddTask={handleAddTask} />
      <div className="task-list">
        {tasks && (
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                <SingleTask
                  task={task}
                  handleEditTask={handleEditTask}
                  handleDeleteTask={handleDeleteTask}
                  handleAddTask={handleAddTask}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
      <CSVLink data={tasks} className="export-button">
        Export as Excel
      </CSVLink>
    </div>
  );
};

export default TaskList;
