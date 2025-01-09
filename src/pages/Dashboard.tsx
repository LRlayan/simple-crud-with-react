import {Customer} from "../model/Customer.ts";
import {useSelector} from "react-redux";

export default function Dashboard() {
    const customers = useSelector(state => state.customer) || []
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