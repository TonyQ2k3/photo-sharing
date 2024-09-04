"use client"

import React, { useState } from 'react'
import Link from 'next/link';

function Register() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, username, password, confirmPassword);
    }

    return (
        <div className='min-h-screen w-full flex justify-center items-center bg-gradient-to-r from-purple-600 to-orange-500'>
            {/* Sign up */}
            <div className='bg-white flex flex-col justify-center items-center py-4 px-6 rounded-xl shadow-2xl'>
                <h1 className='font-merienda font-bold text-2xl md:text-2xl mx-2 m-4'>PixShare</h1>
                <div className='form-wrapper'>
                    <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className="form-input"/>
                    <input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} className="form-input"/>
                    <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} className="form-input" />
                    <input type='password' placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="form-input" />
                </div>
                <button onClick={handleSubmit} className='w-full bg-blue-500 hover:bg-blue-600 p-2 rounded-lg mt-4 text-white'>
                    Sign Up
                </button>
                <div className="w-full border-2 border-gray-300 p-2 mt-4 flex justify-center">
                    <span>Already had an account? 
                        <Link href="/auth/login" className='text-blue-500 hover:text-blue-600 ml-2'>Log In</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Register