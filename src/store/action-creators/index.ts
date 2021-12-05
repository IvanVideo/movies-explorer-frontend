import { ActionTypes } from "../types";
import { Dispatch } from "redux";
import { ActionInputValue } from "../actions/index";
import { ActionCheckboxValue } from "../actions/index";
import { ActionInputErrorValue } from "../actions/index";
import { ActionInputsValuesErrors } from "../actions/index";
import { ActionErrorsValue } from "../actions/index";
import { ActionIsValidValue } from "../actions/index";
import { ActionNameStatusValue } from "../actions/index";
import { ActionMailStatusValue } from "../actions/index";

export const getInputValue = (amount: String) => {
    return (dispatch: Dispatch<ActionInputValue>) => {
        dispatch({
            type: ActionTypes.INPUT_VALUE,
            payload: amount
        })
    }
}

export const changeChackboxValue = (amount: Boolean) => {
    return (dispatch: Dispatch<ActionCheckboxValue>) => {
        dispatch({
            type: ActionTypes.CHACKBOX_VALUE,
            payload: amount
        })
    }
}

export const changeInputErrorValue = (amount: Boolean) => {
    return (dispatch: Dispatch<ActionInputErrorValue>) => {
        dispatch({
            type: ActionTypes.INPUT_ERROR_VALUE,
            payload: amount
        })
    }
}

export const getInputsValues = (amount: {}) => {
    return (dispatch: Dispatch<ActionInputsValuesErrors>) => {
        dispatch({
            type: ActionTypes.INPUTS_VALUES_ERRORS,
            payload: amount
        })
    }
}

export const getErrorsValue = (amount: {}) => {
    return (dispatch: Dispatch<ActionErrorsValue>) => {
        dispatch({
            type: ActionTypes.ERRORS,
            payload: amount
        })
    }
}

export const changeIsValidValue = (amount: Boolean) => {
    return (dispatch: Dispatch<ActionIsValidValue>) => {
        dispatch({
            type: ActionTypes.ISVALID,
            payload: amount
        })
    }
}

export const changeNameValue = (amount: Boolean) => {
    return (dispatch: Dispatch<ActionNameStatusValue>) => {
        dispatch({
            type: ActionTypes.NAME_STATUS,
            payload: amount
        })
    }
}

export const changeMailValue = (amount: Boolean) => {
    return (dispatch: Dispatch<ActionMailStatusValue>) => {
        dispatch({
            type: ActionTypes.MAIL_STATUS,
            payload: amount
        })
    }
}