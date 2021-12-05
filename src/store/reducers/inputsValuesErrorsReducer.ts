import { ActionInputsValuesErrors } from '../actions/index';
import { ActionTypes } from '../types/index';

const initialState = {}

export const inputsValuesErrorsReducer = (state = initialState, action: ActionInputsValuesErrors) => {
    switch (action.type) {
        case ActionTypes.INPUTS_VALUES_ERRORS:
            return action.payload
        default:
            return state
    }
}