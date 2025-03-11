import React, { useState, useEffect, useReducer } from 'react';
import { taskReducer } from './taskReducer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  // Initializing tasks as an empty array
  const [tasks, dispatch] = useReducer(taskReducer, []);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      dispatch({ type: "LOAD", payload: JSON.parse(savedTasks) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm dispatch={dispatch} />
      <TaskList tasks={tasks} dispatch={dispatch} />
    </div>
  );
}

export default App;
