import React, { useState } from 'react'
import { Button } from '../ui/button';
import { Link,  useNavigate } from 'react-router-dom';
import { Input } from '../ui/input';
import { useDispatch } from 'react-redux';
import { loginUser } from '@/store/auth-slice';
import { toast } from '@/hooks/use-toast';

const initialState = {
  email: '',
  password: '',
}

function Login() {
    const[user, setUser] = useState(initialState)
    const dispatch = useDispatch();
    const navigate = useNavigate()

  const handleSubmit = async (e)=>{
      e.preventDefault();

      try{
        const res = await dispatch(loginUser(user))
        console.log(res)
        if(res?.payload?.success){
             toast({
               title: res?.payload?.message ,
             });
             navigate("/shop/home")
        }else{
          toast({
            title: res?.payload?.message,
            variant: 'destructive',
          });
        }
      }catch(err){
        // console.log(res.payload);
        toast({
          title: err.message,
          variant: 'destructive',
        })
      }

  }
  // console.log(user)
  return (
    <div className="px-2 min-w-96">
      <form
       onSubmit={handleSubmit}
        className="bg-slate-200 flex flex-col px-6 py-24 gap-6 rounded-xl"
      >
        <h1 className="text-2xl font-bold text-center">
          Sign In to your account
        </h1>

        <span className="flex flex-col">
          <label htmlFor="email">Email :</label>
          <Input type="email" id="email" placeholder="Enter Your email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}/>
        </span>
        <span className="flex flex-col">
          <label htmlFor="password">password :</label>
          <Input
            type="password"
            id="password"
            placeholder="Enter Your password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </span>
        <Button type="submit" className="">Sign In</Button>
        <span className="font-serif">
          Don't Have an Account?{' '}
          <Link to="/auth/register">
            {' '}
            <span className="font-bold text-blue-700 underline decoration-wavy underline-offset-8">
              {' '}
              SignUp{' '}
            </span>{' '}
          </Link>
        </span>
      </form>
    </div>
  );
}

export default Login
