import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '@/store/auth-slice';
import { useToast } from '@/hooks/use-toast';
import axios from 'axios';



const initialState = {
  username: '',
  email: '',
  password: '',
};
function SignUp() {
  const [user, setUser] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();


    dispatch(registerUser(user)).then((res) => {
      if(res?.payload?.success){
          toast({
            title:res?.payload?.message,
          })
          navigate("/auth/login");
      }else{
      toast({
      title: res?.payload?.message,
        variant:"destructive",
      });
      }
    });
  };

  return (
    <div className="w-1/2 min-w-96">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-slate-200 px-4 rounded-md py-12"
      >
        <h1 className="text-2xl font-bold text-center">Create new account</h1>
        <span className="space-y-2">
          <label htmlFor="username">username :</label>
          <Input
            id="username"
            type="text"
            placeholder="Enter Your Username"
            name="username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </span>
        <span className="space-y-2">
          <label htmlFor="email">Email :</label>
          <Input
            id="email"
            type="email"
            placeholder="Enter Your Email"
            name="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </span>
        <span className="space-y-2">
          <label htmlFor="password">Password : </label>

          <Input
            id="password"
            type="password"
            placeholder="Enter Your password"
            name="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </span>
        <Button type="submit">Sign up</Button>

        <span>
          Already Have an Account?{' '}
          <Link to="/auth/login">
            {' '}
            <span className="font-bold text-blue-700 underline decoration-wavy underline-offset-8">
              Sign In
            </span>{' '}
          </Link>
        </span>
      </form>
    </div>
  );
}

export default SignUp;
