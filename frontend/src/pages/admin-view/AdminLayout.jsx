import AdminHeader from '@/components/admin-view/AdminHeader'
import AdminSidebar from '@/components/admin-view/AdminSidebar'
import React from 'react'
import { Outlet } from 'react-router-dom'

function AdminLayout() {
  return (
    <div className='flex bg-gray-100 min-h-screen'>
       {/* admin sidebar */}
       <AdminSidebar />
          <div className="flex flex-1 flex-col">
            {/* admin header */}
              <AdminHeader/>
            <main className='w-full bg-black h-screen text-white'>
              <Outlet/>
            </main>
          </div>
    </div>
  )
}

export default AdminLayout
