import { combineReducers } from 'redux';
import * as actionTypes from '../actions';

const initState = {
  count: 0
};

function counter(state = initState, action) {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
}

const counterApp = combineReducers({ counter });

export default counterApp;
