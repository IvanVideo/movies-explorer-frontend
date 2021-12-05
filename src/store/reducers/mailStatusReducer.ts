import { ActionMailStatusValue } from '../actions/index';
import { ActionTypes } from '../types/index';

const initialState = false

export const mailStatusReducer = (state = initialState, action: ActionMailStatusValue) => {
    switch (action.type) {
        case ActionTypes.MAIL_STATUS:
            return action.payload
        default:
            return state
    }
}