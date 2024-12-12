import {CustomerForm} from "../components/CustomerForm.tsx";
import {useNavigate} from "react-router";
import {useContext} from "react";
import {CustomerConext} from "../components/CustomerProvider.tsx";

export function UpdateCustomer() {

    const navigate = useNavigate();
    const [customers , setCustomers] = useContext(CustomerConext);

    function updateCustomer(data: {name:string; email:string; mobile:string; address:string}) {
        const updatedCustomer = customers.map((customer) =>
            customer.email === data.email ? {...customer , ...data} : customer
        );
        setCustomers(updatedCustomer);
        navigate('/')
    }
    
    return (
        <>
            <h2>Update Customer</h2>
            <CustomerForm
                initData={{name:"",email:"",mobile:"",address:""}}
                onSubmit={updateCustomer}
                buttonLabel="Update"
            />
        </>
    )
}