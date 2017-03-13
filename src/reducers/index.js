import { combineReducers } from 'react-redux';
import * as ActionTypes from '../actions/ActionTypes';

const todos = (state = {}, action) => {
    switch ( action.type ) {
        case ActionTypes.ADD_TODO:
            return 
                ...state,
                {
                    id: action.id,
                    text: action.text
                }
            };
        case ActionTypes.REMOVE_TODO:
            return filter(t => {});
        default:
            return state;
    }
}

const todoApp = combineReducers({
    todos
});

export default todoApp;