import React from 'react';

const Task = ({ content, id, deleteTask }) => {

    return ( 
            <li key={id}>
            <i className="fas fa-check-circle" aria-hidden="true"></i>
            <i onClick={deleteTask} className="fas fa-trash" aria-hidden="true"></i>
            <span className="task">{content}</span>
            </li>

        )
}
 
export default Task;