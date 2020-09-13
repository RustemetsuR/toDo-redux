import axios from "../axios-api";
import {
    FETCH_TODO_ERROR,
    FETCH_TODO_REQUEST,
    FETCH_TODO_SUCCESS,
    CHANGE_VALUE,
} from "./actionTypes";



const fetchTODORequest = () => {
    return { type: FETCH_TODO_REQUEST };
};
const fetchTODOSuccess = value => {
    return { type: FETCH_TODO_SUCCESS, value };
};
const fetchTODOError = error => {
    return { type: FETCH_TODO_ERROR, error };
};
export const changeValue = value => {
    return { type: CHANGE_VALUE, value };
};

export const fetchToDO = () => {
    return async dispatch => {
        dispatch(fetchTODORequest());
        try {
            const response = await axios.get('/toDo.json');
            dispatch(fetchTODOSuccess(response.data));
        } catch (e) {
            dispatch(fetchTODOError(e));
        }
    };
}

export const fetchAddToDo = value => {
    return async dispatch => {
        try {
            const data = {
                text: value,
            }
            const response = await axios.post('/toDo.json', data);
            dispatch(fetchTODOSuccess(response.data));
        } catch (e) {
        }
    };
}