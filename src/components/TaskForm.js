import React, { useState, useRef, useEffect } from "react";

function TaskForm({ dispatch }) {
    const [title, setTitle] = useState("");
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        dispatch({
            type: "ADD",
            payload: { id: Date.now(), title, completed: false },
        });
        setTitle("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                ref={inputRef}
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add a task..."
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default TaskForm;
