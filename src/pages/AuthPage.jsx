import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/authSlice';
import Button from '../components/Button';
import Input from '../components/Input';
import { useDispatch } from 'react-redux';
import authService from '../services/AuthService';
import { useForm } from 'react-hook-form';
import Cookies from 'js-cookie';

function AuthPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  

  const login = async (data) => {
    setError('');
    try {
      const session = await authService.loginUser(data.username, data.password);
      if (session) {
        const userData = await authService.getUserInfo();
        if (userData) dispatch(authLogin(userData));
        navigate('/api/dashboard');
      }
    } catch (error) {
      setError('An error occurred while logging in');
      console.error(error);
    }
  };
  

  const browserRefresh = async () =>{
    setError('');
    try {
      const userData = await authService.getUserInfo();
      if(userData){
        dispatch(authLogin(userData));
        navigate('/api/dashboard')  
      }
    } catch (error) {
      setError('An Error Occurred while re-login ! ');
      console.log(error);
    }
  }

  useEffect(()=>{
    browserRefresh
  },
  [])

  return (
    <div className="py-8">
      <div className="flex items-center justify-center w-full">
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
          <h2 className="text-center text-2xl font-bold leading-tight">Sign In to your Account</h2>
          <p></p>
          {error && <p>{error}</p>}
          
            <form onSubmit={handleSubmit(login)} className="mt-8">
              <div className="space-y-5">
                <Input
                  label="Username: "
                  placeholder="Enter your username"
                  type="text"
                  {...register('username', {
                    required: true,
                  })}
                />
                <Input
                  label="Password: "
                  type="password"
                  placeholder="Enter your password"
                  {...register('password', {
                    required: true,
                  })}
                />
                <Button type="submit" className="w-full">
                  Sign in
                </Button>
              </div>
            </form>
          
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
