import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    customers:[]
}

const CustomerSlice = createSlice({
    name:"customer",
    initialState:initialState,
    reducers:{
        addCustomer: (state,action) => {
            state.customers.push(action.payload);
        },
        updateCustomer: (state,action) => {
            // @ts-ignore
            const index = state.customers.findIndex(c => c.email === action.payload.email);
            if (index !== -1){
                state.customers[index] = action.payload
            }
        },
        deleteCustomer: (state,action) => {
            // @ts-ignore
            state.customers = state.customers.filter(c => c.email !== action.payload.email);
        }
    }
});

export const {addCustomer,updateCustomer,deleteCustomer} = CustomerSlice.actions;
export default CustomerSlice.reducer;