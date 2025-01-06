export function CustomerModal(props, children) {
    return(
        <>
            <input type="text" placeholder="enter the first name" onChange={(e) => props.setFirstName(e.target.value)}/>
            <input type="text" placeholder="enter the last name" onChange={(e) => props.setLastName(e.target.value)}/>
            <input type="text" placeholder="enter the address" onChange={(e) => props.setAddress(e.target.value)}/>
            <input type="email" placeholder="enter the email" onChange={(e) => props.setEmail(e.target.value)}/>
            <button onClick={props.handleSubmit}>{props.children}</button>
        </>
    )
}