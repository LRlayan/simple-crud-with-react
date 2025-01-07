import {Customer} from "../model/Customer.ts";
import {CustomerContext} from "../store/CustomerProvider.tsx";
import {useContext} from "react";

export default function Dashboard() {
    const [customers,dispatch] = useContext(CustomerContext);
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