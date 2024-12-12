import {useContext} from "react";
import {CustomerConext} from "../components/CustomerProvider.tsx";

export function Dashboard() {
    const [customers , setCustomers] = useContext(CustomerConext);
    return (
        <>
            <h2>Dashboard</h2>
            <br/>
            {
                customers.map((customer) => (
                    <div key={customer.email}>{
                        "Name : " + customer.name + "\n" +
                        "Email : " + customer.email + "\n" +
                        "Mobile : " + customer.mobile + "\n" +
                        "Address : " + customer.address + "\n"}
                    </div>
                ))
            }
        </>
    )
}