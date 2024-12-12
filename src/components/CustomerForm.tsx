import {useState} from "react";

export function CustomerForm({initData , onSubmit , buttonLabel}: {
    initData: {name:string; email:string; mobile:string; address:string},
    onSubmit: (data: {name:string; email:string; mobile:string; address:string}) => void,
    buttonLabel:string
}) {
    const [name , setName] = useState(initData.name);
    const [email , setEmail] = useState(initData.email);
    const [mobile , setMobile] = useState(initData.mobile);
    const [address , setAddress] = useState(initData.address);

    function handleSubmit() {
        onSubmit({name,email,mobile,address});
    }

    return (
        <>
            <input type="text" placeholder="enter the name" onChange={(e) =>{setName(e.target.value)}}/>
            <input type="email" placeholder="enter the email" onChange={(e) => {setEmail(e.target.value)}}/>
            <input type="text" placeholder="enter the mobile" onChange={(e) => {setMobile(e.target.value)}}/>
            <input type="text" placeholder="enter the address" onChange={(e) => {setAddress(e.target.value)}}/>
            <br/>
            <button onClick={handleSubmit}>{buttonLabel}</button>
        </>
    )
}