import { ActionTypes } from '../types/index';

interface InputValue {
    type: ActionTypes.INPUT_VALUE
    payload: String
}

interface ChackboxValue {
    type: ActionTypes.CHACKBOX_VALUE
    payload: Boolean
}

interface InputErrorValue {
    type: ActionTypes.INPUT_ERROR_VALUE
    payload: Boolean
}

export type ActionInputValue = InputValue
export type ActionCheckboxValue = ChackboxValue
export type ActionInputErrorValue = InputErrorValue