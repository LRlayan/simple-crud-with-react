import {useState} from "react";
import {useNavigate} from "react-router";
import {Customer} from "../model/Customer.ts";
import {CustomerModal} from "../components/CustomerModal.tsx";
import {useDispatch} from "react-redux";
import {addCustomer} from "../reducer/CustomerSlice.ts";

export function AddCustomer() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[mobile,setMobile] = useState("");
    const[address,setAddress] = useState("");

    function handleSubmit() {
        const newCustomer = new Customer(name,email,mobile,address)
        dispatch(addCustomer(newCustomer));
        navigate('/');
    }
    
    return (
        <>
            <h2>Add Customer</h2>
            <br/>
            <CustomerModal handleSubmit={handleSubmit} setName={setName} setEmail={setEmail} setMobile={setMobile} setAddress={setAddress}>Add Customer</CustomerModal>
        </>
    )
}