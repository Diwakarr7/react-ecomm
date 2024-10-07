import React, { useState } from 'react'

function Register() {
 const [user, setUser] =  useState({username:"" ,email:"", password:""});

const handleSubmit  = (e)=>{
  e.preventDefault();
  console.log(user)
}

  console.log(user)
  return (
    <form onSubmit={handleSubmit} className="flex gap-4 flex-col">
      <input
        type="text"
        placeholder="enter your username"
        name="username"
        value={user.username}
        className="px-12 py-2"
        onChange={(e) => {
          setUser({ ...user, [e.target.name]: e.target.value });
        }}
      />
      <input
        type="email"
        placeholder="enter your email"
        className="px-12 py-2"
        name="email"
        value={user.email}
        onChange={(e) => {
          setUser({ ...user, [e.target.name]: e.target.value });
        }}
      />
      <input
        type="password"
        placeholder="enter your password"
        className="px-12 py-2"
        name="password"
        value={user.password}
        onChange={(e) => {
          setUser({ ...user, [e.target.name]: e.target.value });
        }}
      />
      <button type="submit" className="bg-blue-400">
        SIGN UP
      </button>
    </form>
  );
}

export default Register
