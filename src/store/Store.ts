import {combineReducers, createStore} from "redux";
import {CustomerReducer} from "../reducer/CustomerReducer.tsx";

const rootReducers = combineReducers({
    customer :CustomerReducer
});

export const store = createStore(rootReducers);