import React, { useReducer } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

function CheckAuth({isAuthenticated,user, children}) {
  const path = useLocation();

  const authPaths =
    path.pathname.includes('/login') || path.pathname.includes('/register');

  //   not auth- path not login or regster - nav to login
  //  is auth - role is admin - nav to admin  dashboard
  // else shop home for normal user

  //  role is admin tries to access to shop nav back to un auth page
  //  role is user tries to access to admin nav back to shop home

  if (!isAuthenticated && !authPaths) {
      return <Navigate to="/auth/login" />
  }

  if(isAuthenticated && authPaths){
    if (isAuthenticated && user?.role === 'admin') {
      return <Navigate to="/admin/dashboard" />;
    } else {
      return <Navigate to="/shop/products" />;
    }
  }

  if(isAuthenticated && (user?.role !== "admin") && path.pathname.includes("admin")){
    return <Navigate to="/shop/products" />;
  }

  if (isAuthenticated && user?.role === 'admin' && path.pathname.includes('shop')) {
    return <Navigate to="/admin/dashboard" />;
  }

  return <> {children}</>

}

export default CheckAuth
