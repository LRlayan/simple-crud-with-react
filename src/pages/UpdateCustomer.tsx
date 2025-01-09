import {useNavigate} from "react-router";
import {useState} from "react";
import {Customer} from "../model/Customer.ts";
import {CustomerModal} from "../components/CustomerModal.tsx";
import {useDispatch} from "react-redux";

export function UpdateCustomer() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [mobile,setMobile] = useState("");
    const [address,setAddress] = useState("");

    function handleSubmit() {
        const updateCustomer = new Customer(name,email,mobile,address);
        dispatch({type:"UPDATE_CUSTOMER",payload:updateCustomer});
        navigate('/')
    }

    return (
        <>
            <h2>Update Customer</h2>
            <CustomerModal handleSubmit={handleSubmit} setName={setName} setEmail={setEmail} setMobile={setMobile} setAddress={setAddress}>Update Customer</CustomerModal>
        </>
    )
}