import React, { useEffect, useState } from 'react';

import Task from './Task';

import '../styles/App.css';

const App = () => {

    const [taskID, setTaskID] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [toDoList, setToDoList] = useState([{id:123,value:'asd'}]);

    const handleInputOnChange = e => {
        setInputValue(e.target.value);
    }

    const handleAddOnClick = () => {
        setToDoList(toDoList + {id:taskID, value:inputValue});
        setTaskID(taskID + 1);
        setInputValue('');
    };

    const handleDeleteTask = (e) => {
        console.log(e);
    };

    const toDoListCopy = toDoList;
    console.log(toDoListCopy);

        return(
        <>
        <div className="inputWrapper">
            <input value={inputValue} onChange={handleInputOnChange} className="addInput" type="text" placeholder="Add task"/>
            <p>from</p>
            <input type="time" className="timeInput" ></input>
            <p>to</p>
            <input type="time" className="timeInput"></input>
            <i onClick={handleAddOnClick}className="fas fa-plus"></i>
        </div>
        <ul>
            {
            toDoList.map( task => {
            // <Task
            // id={task.id}
            // content={task.value}
            // deleteTask={handleDeleteTask.bind(this, task.id)}
            // />
            <div>asd</div>
        })}
        </ul>
        </>
        )
}

export default App;

