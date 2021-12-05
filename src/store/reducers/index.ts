import { combineReducers } from "redux";
import { inputValueReducer } from './inputValueReducer';
import { inputErrorValueReducer } from './inputErrorValueReducer';
import { chackboxValueReducer } from './chackboxValueReducer';
import { inputsErrorsReducer } from './inputsErrorsReducer';
import { inputsValuesErrorsReducer } from './inputsValuesErrorsReducer';
import { isValidReducer } from './isValidReducer';
import { mailStatusReducer } from './mailStatusReducer';
import { nameStatusReducer } from './nameStatusReducer';

export const rootReducer = combineReducers({
    inputValue: inputValueReducer,
    inputError: inputErrorValueReducer,
    chackbox: chackboxValueReducer,
    inputsValues: inputsValuesErrorsReducer,
    inputErrors: inputsErrorsReducer,
    isValid: isValidReducer,
    name: nameStatusReducer,
    mail: mailStatusReducer,
})

export default rootReducer;

export type  State = ReturnType<typeof rootReducer>;