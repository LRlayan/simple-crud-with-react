import {useNavigate} from "react-router";
import {useState} from "react";
import {Customer} from "../model/Customer.ts";
import {CustomerModal} from "../components/CustomerModal.tsx";
import {useDispatch} from "react-redux";
import {updateCustomer} from "../reducer/CustomerSlice.ts";

export function UpdateCustomer() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [mobile,setMobile] = useState("");
    const [address,setAddress] = useState("");

    function handleSubmit() {
        const customerUpdate = new Customer(name,email,mobile,address);
        dispatch(updateCustomer(customerUpdate));
        navigate('/')
    }

    return (
        <>
            <h2>Update Customer</h2>
            <CustomerModal handleSubmit={handleSubmit} setName={setName} setEmail={setEmail} setMobile={setMobile} setAddress={setAddress}>Update Customer</CustomerModal>
        </>
    )
}