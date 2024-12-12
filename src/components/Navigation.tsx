import {Link} from "react-router";

export function Navigation() {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <Link to="/">Dashboard</Link>
                        <Link to="/addCustomer">Add-Customer</Link>
                        <Link to="/updateCustomer">Update-Customer</Link>
                        <Link to="/deleteCustomer">Delete-Customer</Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}