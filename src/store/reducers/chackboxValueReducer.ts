import { ActionCheckboxValue } from '../actions/index';
import { ActionTypes } from '../types/index';

const initialState = false

export const chackboxValueReducer = (state = initialState, action: ActionCheckboxValue) => {
    switch (action.type) {
        case ActionTypes.CHACKBOX_VALUE:
            return action.payload
        default:
            return state
    }
}