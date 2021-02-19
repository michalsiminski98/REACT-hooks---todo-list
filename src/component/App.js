import React, { useState } from 'react';

import Task from './Task';

import '../styles/App.css';

const App = () => {

    const [inputValue, setInputValue] = useState('');
    const [toDoList, setToDoList] = useState([]);

    const handleInputOnChange = e => {
        setInputValue(e.target.value);
    }

    const handleAddOnClick = () => {
        setToDoList(toDoList.concat(inputValue));
        setInputValue('');
    };

        return(
        <>
        <div className="inputWrapper">
            <input value={inputValue} onChange={handleInputOnChange} className="addInput" type="text" placeholder="Add task"/>
            <p>from</p>
            <input type="time" className="timeInput" ></input>
            <p>to</p>
            <input type="time" className="timeInput"></input>
            <i onClick={handleAddOnClick} className="fas fa-plus"></i>
        </div>
        <ul>
            <Task content={toDoList}/>
        </ul>
        </>
        )
}

export default App;

