"use client"

import React, { useState } from 'react'
import Link from 'next/link';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
    }

    return (
        <div className='min-h-screen w-full flex justify-center items-center bg-gradient-to-r from-purple-600 to-orange-500'>
            {/* Login */}
            <div className='bg-white flex flex-col justify-center items-center py-4 px-6 rounded-xl shadow-2xl'>
                <h1 className='font-merienda font-bold text-2xl md:text-2xl mx-2 m-4'>PixShare</h1>
                <div className='form-wrapper'>
                    <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className="form-input"/>
                    <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} className="form-input" />
                </div>
                <button onClick={handleSubmit} className='w-full bg-blue-500 hover:bg-blue-600 p-2 rounded-lg mt-4 text-white'>
                    Login
                </button>
                <Link href="#" className='text-blue-500 hover:text-blue-600 mt-4'>Forgot password?</Link>
                <div className="w-full border-2 border-gray-300 p-2 mt-4 flex justify-center">
                    <span>Don't have an account? 
                        <Link href="/auth/register" className='text-blue-500 hover:text-blue-600 ml-2'>Sign Up</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Login