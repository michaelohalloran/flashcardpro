export const SET_STACK = 'SET_STACK';
export const LOAD_STACKS = 'LOAD_STACKS';

export function setStack(stack) {
    return {
        type: SET_STACK,
        //stack key w/ stack value (same as parameter passed in to this function)
        stack: stack
    }
}

export function loadStacks(stacks) {
    return {
        type: LOAD_STACKS,
        stacks
    }
}