"use client"

import React, { useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const onSubmit = async(e) => {
        e.preventDefault();
        setError('');
        
        await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            router.push('/home');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
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