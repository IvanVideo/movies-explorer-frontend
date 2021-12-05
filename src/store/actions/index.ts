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

interface InputsValuesErrors {
    type: ActionTypes.INPUTS_VALUES_ERRORS
    payload: {}
}

interface ErrorsValue {
    type: ActionTypes.ERRORS
    payload: {}
}

interface IsValidValue {
    type: ActionTypes.ISVALID
    payload: Boolean
}

interface NameStatusValue {
    type: ActionTypes.NAME_STATUS
    payload: Boolean
}

interface MailStatusValue {
    type: ActionTypes.MAIL_STATUS
    payload: Boolean
}

export type ActionInputValue = InputValue
export type ActionCheckboxValue = ChackboxValue
export type ActionInputErrorValue = InputErrorValue
export type ActionInputsValuesErrors = InputsValuesErrors
export type ActionErrorsValue = ErrorsValue
export type ActionIsValidValue = IsValidValue
export type ActionNameStatusValue = NameStatusValue
export type ActionMailStatusValue = MailStatusValue