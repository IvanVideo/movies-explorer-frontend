import { ActionInputValue } from '../actions/index';
import { ActionTypes } from '../types/index';

const initialState = ''

export const inputValueReducer = (state = initialState, action: ActionInputValue) => {
    switch (action.type) {
        case ActionTypes.INPUT_VALUE:
            return action.payload
        default:
            return state
    }
}