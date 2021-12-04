import { ActionTypes } from "../types";
import { Dispatch } from "redux";
import { ActionInputValue } from "../actions/index";
import { ActionCheckboxValue } from "../actions/index";
import { ActionInputErrorValue } from "../actions/index";

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