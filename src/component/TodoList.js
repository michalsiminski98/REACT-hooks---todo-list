import React, { useState } from 'react';

import TodoForm from './TodoForm';
import Task from './Task.js';

const TaskList = () => {

    const [list, setList] = useState([{id:1, value:'zxcxzczxc'},{id:2, value:'kup ven'}]);

    const handleDelete = (id) => {
        const newList = list.filter(item => item.id !== id);
        setList(newList);
    }

    return (
        <>
            <TodoForm
            tasks={list}
            addTask={setList}
            />
            <ul>
                {list.map( task => (
                <Task
                key={task.id}
                id={task.id}
                value={task.value}
                deleteTask={handleDelete}
                />
                ))}
            </ul>
        </>
        )
}

export default TaskList;