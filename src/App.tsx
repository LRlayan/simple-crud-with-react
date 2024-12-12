import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {RootLayout} from "./components/RootLayout.tsx";
import Dashboard from "./pages/Dashboard.tsx"
import {AddCustomer} from "./pages/AddCustomer.tsx";
import {UpdateCustomer} from "./pages/UpdateCustomer.tsx";
import {DeleteCustomer} from "./pages/DeleteCustomer.tsx";
import {CustomerProvider} from "./components/CustomerProvider.tsx";

function App() {

  const routes = createBrowserRouter([
    {
      path : '',
        element : <RootLayout/>,
          children : [
            {path : '' , element : <Dashboard/>},
            {path : '/addCustomer' , element : <AddCustomer/>},
            {path : '/updateCustomer' , element : <UpdateCustomer/>},
            {path : '/deleteCustomer' , element : <DeleteCustomer/>}
          ]
    }
  ]);

  return (
    <>
      <CustomerProvider>
        <RouterProvider router={routes}/>
      </CustomerProvider>
    </>
  )
}

export default App
