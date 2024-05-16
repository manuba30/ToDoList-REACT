import React, { useState } from "react";

// ToDoList Component
// A simple to-do list application that allows adding, deleting, and moving tasks up and down.
function ToDoList() {
    // State to manage the list of tasks
    const [tasks, setTasks] = useState(["eat", "go out", "sleep"]);
    // State to manage the input value for a new task
    const [newTask, setNewTask] = useState("");
    
    /**
     * Handles the change in the input field for adding a new task.
     * @param {Object} event - The event object from the input field.
     */
    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    /**
     * Adds a new task to the tasks list if the input is not empty or just whitespace.
     */
    function handleAddTask() {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    }

    /**
     * Deletes a task from the tasks list based on the given index.
     * @param {number} index - The index of the task to delete.
     */
    function handleDeleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    /**
     * Moves a task up in the tasks list.
     * @param {number} index - The index of the task to move up.
     */
    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    /**
     * Moves a task down in the tasks list.
     * @param {number} index - The index of the task to move down.
     */
    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    // Render the to-do list component
    return (
        <div className="to-do-list">
            <h1>To-Do List</h1>
            <div>
                <input 
                    type="text" 
                    placeholder="Enter a task"
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button className="add-button" onClick={handleAddTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={() => handleDeleteTask(index)}>Delete</button>
                        <button className="move-button" onClick={() => moveTaskUp(index)}>Up</button>
                        <button className="move-button" onClick={() => moveTaskDown(index)}>Down</button>
                    </li>
                )}
            </ol>
        </div>
    );
}

export default ToDoList;
