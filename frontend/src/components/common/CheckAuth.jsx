import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';

function CheckAuth({isAuthenticated, user, children}) {

  //  tp get the current route path
  const location = useLocation();
    
  const authPaths =
     location.pathname.includes('/login') ||

     location.pathname.includes('/register');

  if(!isAuthenticated && !authPaths){
        return <Navigate to="/auth/login" />
  }

  if(isAuthenticated && authPaths){
    // if auth then check the role os a user
    //  redirect to admin page if he is admin
    if (user?.role === "admin"){
      return <Navigate to="/admin/dashboard" />
    }else{
      //  return to normal home page if he is normal user
      return <Navigate to="/shop/home" />;
    }
  }

 // is user authrized and he is not admin and tries to access admin page then reject with un-auth page
  if(isAuthenticated && (user?.role !=="admin") && (location.pathname.includes("admin") )){
    return <Navigate to="/un-auth" />
  }
  if(isAuthenticated && (user?.role ==="admin") && (location.pathname.includes("shop") )){
    return <Navigate to="/admin/dashboard" />
  }

  return <>{children}</>

}

export default CheckAuth
