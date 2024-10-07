import { Button } from '@/components/ui/button';
import React from 'react'
import { Outlet } from 'react-router-dom';

function AuthLayout() {
  return (
    <div className="flex min-h-screen flex-col sm:flex-row  w-screen  bg-slate-300">
      <div className="flex  w-screen bg-black justify-center min-h-[30vh]  sm:w-1/2 mb-6 items-center px-4">
        <h1 className= "text-slate-400 tracking-widest leading-relaxed text-3xl decoration-wavy  font-semibold underline underline-offset-8">
          Welcome To E-Comm Shopping
        </h1>
      </div>

      <div className="flex w-screen md:w-1/2 text-black justify-center items-center">
        {<Outlet />}
      </div>
    </div>
  );
}

export default AuthLayout;
