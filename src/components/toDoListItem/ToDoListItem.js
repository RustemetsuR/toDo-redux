import React from 'react';
import './toDoListItem.css';

const ToDoListItem = props => {
    return (
        <div className='text-box'>
            <h3 className='text'>{props.text}</h3>
        </div>
    );
};

export default ToDoListItem;