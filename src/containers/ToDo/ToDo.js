import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchToDO, fetchAddToDo } from '../../store/actions';
import ToDoListItem from '../../components/toDoListItem/ToDoListItem';
import { changeValue } from '../../store/actions';
import './toDo.css';
const ToDo = () => {

    const toDo = useSelector(state => state.toDo);
    const inputValue = useSelector(state => state.inputValue);
    const dispatch = useDispatch();

    const inputValueChanged = event => {
        const value = event.target.value;
        dispatch(changeValue(value));
    }

    const addNewToDo = (value) => fetchAddToDo(value);

    useEffect(() => {
        dispatch(fetchToDO());
    }, [toDo, dispatch]);

    return (
        <div>
            <div className='toDo-form'>
                <input placeholder="What's next?" onChange={inputValueChanged} />
                <button onClick={addNewToDo(inputValue)}>Add</button>
            </div>
            <div className='toDoList'>

                 {Object.keys(toDo).map(function (key) {
                    return <ToDoListItem key={key} text={toDo[key].text} />
                })}
            </div>


        </div>
    );
};

export default ToDo;