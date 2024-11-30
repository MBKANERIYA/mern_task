import React from "react";
import { Navigate, Outlet } from "react-router-dom";



let Adminprivate = () => {

    let userRole = localStorage.getItem("role");  
    
    return (

        userRole === "admin" ? <Outlet /> : <Navigate to={"/"} />
    );
}

let Userprivate = () => {
    let userRole = localStorage.getItem("role");

    return (
        userRole === "user" ? <Outlet /> : <Navigate to={"/"} />
    );
}
export { Adminprivate, Userprivate }