import React, { useState, useEffect } from 'react';
import styles from "@/styles/todolist.module.css";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);

    useEffect(() => {
      setTasks([]);
    }, []);

  const addTask = task => {
    setTasks([...tasks, task]);
  };

  const removeTask = taskToRemove => {
    setTasks(tasks.filter(task => task !== taskToRemove));
  };

  return (
    <div className={styles.todoList}>
      <h1 className={styles.title}>To-do List</h1>
      <div className={styles.taskInput}>
      <input type="text" id="new-task" placeholder="Add a new task..." />
        <button onClick={() => addTask(document.getElementById('new-task').value)}>Add Task</button>
      </div>
      {tasks.map((task, index) => (
        <div key={index}>
          {task}
          <button onClick={() => removeTask(task)}>Delete</button>
        </div>
      ))}
    </div>
  );
}