import React from 'react'
import { useNavigate } from 'react-router-dom';

function UnAuth() {
  const navigate = useNavigate()

  const handleNav = ()=>{
    navigate(-1)
  }

  // usena
  return (

      <div className="min-h-screen w-screen  justify-center items-center flex flex-col">
        <h1 className="text-5xl bg-red text-black">Un authorized 401..</h1>
        <button className='text-xl bg-orange-100' onClick={handleNav}>Go Back </button>
      </div>
  );
}

export default UnAuth
