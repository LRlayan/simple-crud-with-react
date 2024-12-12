import {useContext} from "react";
import {CustomerConext} from "../components/CustomerProvider.tsx";
import {Customer} from "../model/Customer.ts";

export default function Dashboard() {
    const [customers , setCustomers] = useContext(CustomerConext);
    return (
        <>
            <h2>Dashboard</h2>
            <br/>
            {
                customers.map((customer : Customer) => (
                    <div key={customer.email}>{
                        "Name : " + customer.name + " | " +
                        "Email : " + customer.email + " | " +
                        "Mobile : " + customer.mobile + " | " +
                        "Address : " + customer.address + " | "}
                    </div>
                ))
            }
        </>
    )
}