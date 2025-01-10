import {useState} from "react";
import {useNavigate} from "react-router";
import {Customer} from "../model/Customer.ts";
import {CustomerModal} from "../components/CustomerModal.tsx";
import {useDispatch} from "react-redux";
import {deleteCustomer} from "../reducer/CustomerSlice.ts";

export function DeleteCustomer() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [mobile,setMobile] = useState("");
    const [address,setAddress] = useState("");

    function handleSubmit() {
        const delCustomer = new Customer(name,email,mobile,address);
        dispatch(deleteCustomer(delCustomer));
        navigate('/');
    }

    return (
        <>
            <h2>Delete Customer</h2>
            <CustomerModal handleSubmit={handleSubmit} setName={setName} setEmail={setEmail} setMobile={setMobile} setAddress={setAddress}>Delete Customer</CustomerModal>
        </>
    )
}