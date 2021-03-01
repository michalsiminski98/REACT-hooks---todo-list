import React, { useState } from 'react';

const TodoForm = ({ tasks, addTask }) => {

    const [task, setTask] = useState('');
    
    const handleInputChange = e => {
        setTask(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        const taskValue = task;
        const id = Math.floor(Math.random() * 100000);
        addTask([
            ...tasks,
            {id: id, value: taskValue}
        ]);
        setTask('');
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="task..."
            value={task}
            onChange={handleInputChange}
            />
            <button>Add task</button>
        </form>
     );
}
 
export default TodoForm;