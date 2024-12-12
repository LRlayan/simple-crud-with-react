import {CustomerForm} from "../components/CustomerForm.tsx";

export function AddCustomer() {
    
    function saveCustomer() {
        
    }
    
    return (
        <>
            <h2>Add Customer</h2>
            <br/>
            <CustomerForm
                initData={{name:"",email:"",mobile:"",city:""}}
                onSubmit={saveCustomer}
                buttonLabel="Save"
            />
        </>
    )
}