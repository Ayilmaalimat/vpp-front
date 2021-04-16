import {combineReducers} from "redux";
import {formReducer} from "./formReducer";
import {costsReducer} from "./costsReducer";

export const rootReducer = combineReducers({
    form: formReducer,
    costs: costsReducer
})