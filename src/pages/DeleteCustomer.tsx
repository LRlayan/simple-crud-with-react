import {useContext, useState} from "react";
import {CustomerConext} from "../components/CustomerProvider.tsx";
import {useNavigate} from "react-router";

export function DeleteCustomer() {
    const naviagte = useNavigate();
    const [email , setEmail] = useState("");
    const [customers,setCustomers] = useContext(CustomerConext);

    function deleteCustomer() {
        setCustomers((customer) => customer.filter((customer) => customer.email != email))
        naviagte('/');
    }

    return (
        <>
            <h2>Delete Customer</h2>
            <input type="text" placeholder="enter the email" onChange={(e) => {setEmail(e.target.value)}}/>
            <br/>
            <button onClick={deleteCustomer}>Delete</button>
        </>
    )
}