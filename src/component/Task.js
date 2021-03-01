import React from 'react';

const Task = ({ id, value, deleteTask }) => {
    return ( 
        <li>{value} <button onClick={() => deleteTask(id)}>Delete</button></li>
     );
}
 
export default Task;