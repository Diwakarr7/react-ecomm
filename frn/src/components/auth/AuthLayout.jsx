import React from 'react'
import { Outlet } from 'react-router-dom';

function AuthLayout() {
  return (
    <div className="h-screen w-screen bg-gray-300 flex">
      <div className="w-1/2 bg-gray-600 h-screen flex justify-center items-center">
        <h1 className="text-5xl">welcome user</h1>
      </div>
   <main className='w-1/2 flex justify-center items-center flex-col'>
    {<Outlet/>}

   </main>

    </div>
  );
}

export default AuthLayout

