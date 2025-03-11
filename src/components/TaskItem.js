import React from "react";

function TaskItem({ task, dispatch, deleteTask }) {
    const toggleCompletion = () => {
        dispatch({ type: "TOGGLE", payload: task.id });
    };

    return (
        <li>
            <span
                onClick={toggleCompletion}
                style={{
                    textDecoration: task.completed ? "line-through" : "none",
                    cursor: "pointer",
                }}
            >
                {task.title}
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
    );
}

export default TaskItem;
