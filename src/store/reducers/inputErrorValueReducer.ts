import { ActionInputErrorValue } from '../actions/index';
import { ActionTypes } from '../types/index';

const initialState = false

export const inputErrorValueReducer = (state = initialState, action: ActionInputErrorValue) => {
    switch (action.type) {
        case ActionTypes.INPUT_ERROR_VALUE:
            return action.payload
        default:
            return state
    }
}