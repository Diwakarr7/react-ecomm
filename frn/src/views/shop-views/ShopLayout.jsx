import React from 'react'
import ShopHeader from '../../components/shop/ShopHeader';
import Products from '../../components/shop/Products';
import Lists from '../../components/shop/Lists';
import { Link, Outlet } from 'react-router-dom';



function ShopLayout() {
  return (
    <div className='bg-gray-400 min-h-screen w-screen'>
     
          <ShopHeader/>
          <div className='flex gap-4 p-4'>
          {<Outlet/>}
          </div>
    </div>
  )
}

export default ShopLayout
