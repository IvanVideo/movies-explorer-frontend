import { ActionIsValidValue } from '../actions/index';
import { ActionTypes } from '../types/index';

const initialState = false

export const isValidReducer = (state = initialState, action: ActionIsValidValue) => {
    switch (action.type) {
        case ActionTypes.ISVALID:
            return action.payload
        default:
            return state
    }
}