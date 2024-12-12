import {CustomerForm} from "../components/CustomerForm.tsx";
import {useContext} from "react";
import {CustomerConext} from "../components/CustomerProvider.tsx";
import {Navigation} from "../components/Navigation.tsx";
import {useNavigate} from "react-router";
import {Customer} from "../model/Customer.ts";

export function AddCustomer(data: {name:string; email:string; mobile:string; address:string}) {

    const navigate = useNavigate();
    const[customers,setCustomers] = useContext(CustomerConext);

    function saveCustomer(data: {name:string; email:string; mobile:string; address:string}) {
        const newCustomer = new Customer(data.name,data.email,data.mobile,data.address);
        setCustomers((customers: Customer[]) => [...customers,newCustomer])
        navigate("/");
    }
    
    return (
        <>
            <h2>Add Customer</h2>
            <br/>
            <CustomerForm
                initData={{name:"",email:"",mobile:"",address:""}}
                onSubmit={saveCustomer}
                buttonLabel="Save"
            />
        </>
    )
}