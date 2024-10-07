import { useEffect, useState } from 'react'
import AuthLayout from './components/auth/AuthLayout'
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import { Route, Routes } from 'react-router-dom'
import ShopLayout from './views/shop-views/ShopLayout'
import Products from './components/shop/Products'
import Lists from './components/shop/Lists'
import NotFound from './NotFound'
import AdminLayout from './views/admin-views/AdminLayout'
import AdminDashboard from "./components/admin/AdminDashboard"
import AdminDetails from './components/admin/AdminDetails'
import CheckAuth from './components/CheckAuth'
import UnAuth from './components/UnAuth'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import {checkAuth} from "./store/auth/auth-slice"

function App() {
  const dispatch = useDispatch()

  const{isAuthenticated, user, loading} = useSelector((state)=> state.auth)


  // useEffect(()=>{
  //   dispatch(checkAuth())
  // },[dispatch])

  return (
    <>
      <Routes>
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route
          path="/shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShopLayout />
            </CheckAuth>
          }
        >
          <Route path="products" element={<Products />} />
          <Route path="lists" element={<Lists />} />
        </Route>
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="details" element={<AdminDetails />} />
        </Route>
        <Route path="un-auth" element={<UnAuth />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App
