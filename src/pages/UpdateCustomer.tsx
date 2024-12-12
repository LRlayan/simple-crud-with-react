import {CustomerForm} from "../components/CustomerForm.tsx";

export function UpdateCustomer() {
    
    function updateCustomer() {
        
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