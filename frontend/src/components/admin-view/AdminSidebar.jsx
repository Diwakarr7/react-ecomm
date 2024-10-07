import React from 'react'
import { Link } from 'react-router-dom';

function AdminSidebar() {
  return (
    <div className="w-1/4 flex-1/2 bg-slate-400 flex justify-center items-center gap-12 flex-col">
      {/* <h1> admin sidebar</h1> */}
      <Link to="/admin/dashboard">
        <h1 className="text-3xl font-extralight  hover:underline">Dashboard</h1>
      </Link>
      <Link to="/admin/products">
        <h1 className="text-3xl font-extralight  hover:underline">Products</h1>
      </Link>
      <Link to="/admin/orders">
        <h1 className="text-3xl font-extralight  hover:underline">Orders</h1>
      </Link>
    </div>
  );
}

export default AdminSidebar
