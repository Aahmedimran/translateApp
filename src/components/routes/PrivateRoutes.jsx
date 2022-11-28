import React from 'react'
import { Navigate, Outlet, } from 'react-router-dom'



const PrivateRoutes = () => {
    const user =  localStorage.getItem("username");
    return user ?  <Outlet/> : <Navigate to="/"/>  

}

export default PrivateRoutes





