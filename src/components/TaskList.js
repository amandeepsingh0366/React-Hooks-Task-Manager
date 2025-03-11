import React, { useMemo, useCallback } from "react";

function TaskList({ tasks, dispatch }) {
  // Ensure tasks is always an array
  const filteredTasks = useMemo(() => {
    if (!Array.isArray(tasks)) return [];
    return tasks.filter((task) => !task.completed);
  }, [tasks]);

  const deleteTask = useCallback((id) => {
    dispatch({ type: "DELETE", payload: id });
  }, [dispatch]);

  return (
    <ul>
      {filteredTasks.map((task) => (
        <li key={task.id}>
          {task.title}
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
