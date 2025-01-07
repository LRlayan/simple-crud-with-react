export function CustomerModal(props, children) {
    return(
        <>
            <input type="text" placeholder="enter the name" onChange={(e) => props.setName(e.target.value)}/>
            <input type="text" placeholder="enter the email" onChange={(e) => props.setEmail(e.target.value)}/>
            <input type="text" placeholder="enter the mobile" onChange={(e) => props.setMobile(e.target.value)}/>
            <input type="text" placeholder="enter the address" onChange={(e) => props.setAddress(e.target.value)}/>
            <button onClick={props.handleSubmit}>{props.children}</button>
        </>
    )
}