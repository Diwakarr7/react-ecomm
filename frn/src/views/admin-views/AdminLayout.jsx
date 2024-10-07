import React from 'react'
import AdminHeader from '../../components/admin/AdminHeader';
import AdminSidebar from '../../components/admin/AdminSidebar';
import { Outlet } from 'react-router-dom';


function AdminLayout() {
  return (
     <div className='min-h-screen bg-slate-400 flex w-screen'>
        <>
          <AdminSidebar/>
        </>
        <div>
          <AdminHeader/>
          <Outlet/>
        </div>

     </div>
  );
}

export default AdminLayout
