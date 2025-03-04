import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../utils/api';
import { toast } from "react-toastify";


function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = async (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    try {
      const res = await api.post('/api/auth/signin', { email, password });
      
      if (res.data) {
        toast.success("successfully!");
        window.location.href = '/';
      }
    } catch (err) {
      console.error(err);
      const message = err.response?.data?.message || 'Server Error!';
      alert(message);
    }
  };

  return (
    <div className='flex justify-center items-center h-screen dark:text-black p-3'>
      <form onSubmit={handleSignin} className='bg-gray-200 p-8 shadow-2xl rounded-2xl w-sm'>
        <h1 className='text-2xl py-3 font-bold uppercase'>Login</h1>
        
        <div>
          <label className='font-semibold'>Email*</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='block border-2 border-gray-400 px-2 py-2 rounded-lg w-full font-semibold mb-3'
            required
          />
        </div>

        <div>
          <label className='font-semibold'>Password*</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='block border-2 border-gray-400 px-2 py-2 rounded-lg w-full font-semibold'
            required
          />
        </div>

        <button
          disabled={!email || !password}
          className={`w-full mt-3 p-2 rounded-lg ${!email || !password ? 'bg-purple-300 cursor-not-allowed' : 'bg-purple-500 text-white'}`}
        >
          LOGIN
        </button>

        <p className='text-center mt-3 font-semibold'>
          Don't have an account? 
          <Link to='/signup' className='text-blue-500 underline'> Sign up</Link>
        </p>
      </form>
    </div>
  );
}

export default Signin;
