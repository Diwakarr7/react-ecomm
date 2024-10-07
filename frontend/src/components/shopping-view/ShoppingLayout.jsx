import ShoppingHeader from '@/components/shopping-view/ShoppingHeader';
import React from 'react'
import { Outlet } from 'react-router-dom';

function ShoppingLayout() {
  return (
    <div>
      <ShoppingHeader/>
      <main>

      {<Outlet/>}
      </main>
    </div>
  );
}

export default ShoppingLayout
