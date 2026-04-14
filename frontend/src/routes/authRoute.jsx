import { Route } from "react-router-dom";
import Login from "../pages/Auth/Login.jsx"
import Register from "../pages/Auth/Register.jsx";

const authRoute = (
    <>
    <Route
        path='/login'
        element={
            <Login/>
        }/>

    <Route 
        path='/register'
        element={
            <Register/>
        }/>
    </>
)

export default authRoute;