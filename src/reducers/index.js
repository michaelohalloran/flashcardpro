import {SET_STACK, LOAD_STACKS} from '../actions/index';
import {combineReducers} from 'redux';

function stack(state={}, action) {
    switch(action.type) {
        case SET_STACK:
            return action.stack;
        
        default: 
            return state;
    }
}

export function stacks(state=[], action) {
    switch(action.type) {
        case LOAD_STACKS:
            return action.stacks;        
        default: 
            return state;
    }
}

export default combineReducers({stack, stacks});