"use client"

import React, { useState } from 'react'
import Link from 'next/link';



const BACKEND_API = process.env.NEXT_PUBLIC_BACKEND_API;

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const onSubmit = async(e) => {
        e.preventDefault();
        setError('');
        try {
            await handleLogin(email, password);
            // Optionally redirect or show success message
        } catch (err) {
            setError('Login failed. Please try again.');
        }
    }

    const handleLogin = async(email, password) => {
        let user = {
            email: email,
            password: password
        };
        console.log(user);
        try {
            const response = await fetch(`${BACKEND_API}/auth/login`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(user),
            });
      
            if (!response.ok) {
              throw new Error('Login failed');
            }
      
            const data = await response.json();
            console.log('User logged in:', data);
            // Handle successful login
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <div className='min-h-screen w-full flex justify-center items-center bg-gradient-to-r from-iconic-blue to-iconic-orange'>
            {/* Login */}
            <div className='bg-white flex flex-col justify-center items-center py-4 px-6 rounded-xl shadow-2xl'>
                <h1 className='font-merienda font-bold text-2xl md:text-2xl mx-2 m-4'>
                    PixShare
                </h1>
                <form onSubmit={onSubmit} className='form-wrapper'>
                    <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className="form-input"/>
                    <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} className="form-input" />
                    {
                        error !== '' ? (
                            <div className='w-full p-2 bg-red-300 border-red-400 border-2'>
                                <p className='text-sm text-red-600'>{error}</p>
                            </div>
                        ) : (
                            <div/>
                        )
                    }
                    <button type='submit' className='w-full bg-blue-500 hover:bg-blue-600 p-2 rounded-lg mt-4 text-white'>
                        Login
                    </button>
                </form>
                <Link href="#" className='text-blue-500 hover:text-blue-600 mt-4'>Forgot password?</Link>
                <div className="w-full border-2 border-gray-300 p-2 mt-4 flex justify-center">
                    <span>Don't have an account? 
                        <Link href="/register" className='text-blue-500 hover:text-blue-600 ml-2'>Sign Up</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Login