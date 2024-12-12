import {createContext, useState} from "react";
import {Customer} from "../model/Customer.ts";

export const CustomerConext = createContext();

export function CustomerProvider({children}) {
    const [customers , setCustomers] = useState<Customer[]>([]);
    return (
        <>
            <CustomerConext.Provider value={[customers,setCustomers]}>
                {children}
            </CustomerConext.Provider>
        </>
    )
}