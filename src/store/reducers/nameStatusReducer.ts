import { ActionNameStatusValue } from '../actions/index';
import { ActionTypes } from '../types/index';

const initialState = false

export const nameStatusReducer = (state = initialState, action: ActionNameStatusValue) => {
    switch (action.type) {
        case ActionTypes.NAME_STATUS:
            return action.payload
        default:
            return state
    }
}