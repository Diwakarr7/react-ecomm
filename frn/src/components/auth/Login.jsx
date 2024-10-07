import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/auth/auth-slice';
import {useNavigate} from "react-router-dom"
import { toast } from 'react-toastify';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: '', password: '' });

  const handleSubmit =  async (e) => {
    e.preventDefault();

    try {
      const res =  await dispatch(loginUser(user));
      console.log(res)

      if(res?.payload?.success){
       toast.success( res?.payload?.message,{
              position:"bottom-right",
              theme:"dark"
        })
         toast.success(" welcome "+ res?.payload?.user?.username , {
           position: 'bottom-right',
           theme: 'dark',
           delay: 2000
         });
        navigate("/shop/products")
      }else{
        toast.error(res?.payload?.message, {
          position: 'bottom-right',
          theme: 'dark',
        });
      }
    } catch (err) {
      toast.error(err.message, {
        position: 'bottom-right',
        theme: 'dark',
      });
    }
  };


  return (
    <form onSubmit={handleSubmit} className="flex gap-4 flex-col">
      <input
        type="email"
        placeholder="enter your email"
        name="email"
        value={user.email}
        className="px-12 py-2"
        onChange={(e) => {
          setUser({ ...user, [e.target.name]: e.target.value });
        }}
      />
      <input
        type="password"
        placeholder="enter your password"
        name="password"
        className="px-12 py-2"
        value={user.password}
        onChange={(e) => {
          setUser({ ...user, [e.target.name]: e.target.value });
        }}
      />
      <button type="submit" className="bg-blue-400">
        SIGN IN
      </button>
    </form>
  );
}

export default Login;
