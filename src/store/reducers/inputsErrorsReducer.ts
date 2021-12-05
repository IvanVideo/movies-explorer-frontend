import { any } from 'prop-types';
import { ActionErrorsValue } from '../actions/index';
import { ActionTypes } from '../types/index';

const initialState = {}

export const inputsErrorsReducer = (state = initialState, action: ActionErrorsValue) => {
    switch (action.type) {
        case ActionTypes.ERRORS:
            return action.payload
        default:
            return state
    }
}