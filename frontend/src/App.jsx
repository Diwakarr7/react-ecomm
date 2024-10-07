import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AuthLayout from './pages/auth/AuthLayout'
import { Route, Routes, useLocation } from 'react-router-dom'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import AdminSidebar from './components/admin-view/AdminSidebar'
import AdminLayout from './pages/admin-view/AdminLayout'
import Dashboard from './pages/admin-view/Dashboard'
import Products from './pages/admin-view/Products'
import Orders from './pages/admin-view/Orders'
import NotFound from './components/NotFound'
import ShoppingLayout from './components/shopping-view/ShoppingLayout'
import ShopHome from './pages/shopping-view/ShopHome'
import ShopListing from './pages/shopping-view/ShopListing'
import ShopCheckout from './pages/shopping-view/ShopCheckout'
import ShopAccount from './pages/shopping-view/ShopAccount'
import CheckAuth from './components/common/CheckAuth'
import Unauth from './components/Unauth'
import { checkAuth } from './store/auth-slice'


function App() {

  const dispatch =  useDispatch();
   useEffect(() => {
     dispatch(checkAuth());
   }, [dispatch]);

  const {isAuthenticated, user, loading, role} = useSelector((state) => state.auth);

   if (loading) return(
    <div className='bg-orange-50 h-screen w-screen text-center justify-center items-center'>
      <h1 className='text-4xl'>Loding.....</h1>
    </div>
   )

    return (
      <div>
      <Routes>
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user} loading={loading}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<Login />} />
          <Route path="register" element={<SignUp />} />
        </Route>
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user} loading={loading}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
        </Route>
        <Route
          path="/shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user} loading={loading}>
              <ShoppingLayout />
            </CheckAuth>
          }
        >
          <Route path="home" element={<ShopHome />} />
          <Route path="listing" element={<ShopListing />} />
          <Route path="checkout" element={<ShopCheckout />} />
          <Route path="account" element={<ShopAccount />} />
        </Route>
        <Route path="/un-auth" element={<Unauth/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App
