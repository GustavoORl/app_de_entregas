import { Navigate, Route } from "react-router-dom";
import AdminDashboard from "../pages/admin/AdminDashboard";

export default function adminRoute({children}){
    const user = JSON.parse(localStorage.getItem("user"));

    if(!user || user.role !== "ADMIN"){
        return <Navigate to="/home"/>
    }

    return children;
}