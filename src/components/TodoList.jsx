import React, { useState } from 'react'

function TodoList() {
    const [tasks, setTasks] = useState(["Learn React", "Complete JS Capstone", "Submit JS Capstone"]);
    const addTask = ()=> {
        setTasks([...tasks, "Revise JS"]);
    }
  return (
    <div>
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>{task}</li>
            ))}
            
        </ul>
        <button onClick={addTask}>Add Task</button>
    </div>
  )
}

export default TodoList