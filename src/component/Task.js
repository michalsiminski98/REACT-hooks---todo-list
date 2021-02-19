import React from 'react';

const Task = ({ content }) => {

    
    const tasks = content.map(task => (
        <li>
            <i class="fas fa-check-circle" aria-hidden="true"></i>
            <i class="fas fa-trash" aria-hidden="true"></i>
            <span className="task">{task}</span>
        </li>
    ));

    return ( 
        <span>
            {tasks}
        </span>
    )
}
 
export default Task;