import {
    FETCH_TODO_ERROR,
    FETCH_TODO_REQUEST,
    FETCH_TODO_SUCCESS,
    CHANGE_VALUE,
} from "./actionTypes";


const initialState = {
    toDo: [],
    loading: false,
    error: null,
    inputValue: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_VALUE:
            return { ...state, inputValue: action.value };
        case FETCH_TODO_REQUEST:
            return { ...state, loading: true };
        case FETCH_TODO_SUCCESS:
            return { ...state, loading: false, toDo: action.value };
        case FETCH_TODO_ERROR:
            return { ...state, loading: false, error: action.error };
        default:
            return state;
    }
};


export default reducer;