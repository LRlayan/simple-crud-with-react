import {Customer} from "../model/Customer.ts";

export const initialState : Customer[] = [];

export function CustomerReducer(state = initialState,action:{type:string,payload:Customer}) {
    switch (action.type) {
        case "ADD_CUSTOMER":
            return [...state, action.payload];
        case "UPDATE_CUSTOMER":
            return state.map((customer) => customer.email === action.payload.email ? {...state,name:action.payload.name,email:action.payload.email,mobile:action.payload.mobile,address:action.payload.address}:customer);
        case "DELETE_CUSTOMER":
            return state.slice(0,-1);
        default:
            return state;
    }
}