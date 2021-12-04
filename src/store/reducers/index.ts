import { combineReducers } from "redux";
import { inputValueReducer } from './inputValueReducer';
import { inputErrorValueReducer } from './inputErrorValueReducer';
import { chackboxValueReducer } from './chackboxValueReducer';

export const rootReducer = combineReducers({
    inputValue: inputValueReducer,
    inputError: inputErrorValueReducer,
    chackbox: chackboxValueReducer,
})

export default rootReducer;

export type  State = ReturnType<typeof rootReducer>;