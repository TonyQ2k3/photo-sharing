'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {add, heart, home, account} from '@/public'
import IconWithTooltip from './IconWithTooltip'

import { auth } from '@/lib/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';


function Header() {
    const [user, setUser] = React.useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
    }, []);

    return (
    <div className="w-full border-b-2 border-gray-300">
        <div className='flex justify-between items-center w-full lg:w-3/4 mx-auto py-2'>
            <Link href="/" className="font-merienda font-semibold text-lg md:text-2xl mx-2">PixShare</Link>
            <SearchBar />
            <nav className='flex'>
                <Link href="/home" className="nav-wrapper">
                    <IconWithTooltip src={home} alt="Home" tooltip="Home" />
                </Link>
                <Link href="/post/create" className="nav-wrapper">
                    <IconWithTooltip src={add} alt="New post" tooltip="New post" />
                </Link>
                <Link href="#" className="nav-wrapper">
                    <IconWithTooltip src={heart} alt="Favorites" tooltip="Favorites" />
                </Link>
                <UserIcon user={user} />
            </nav>
        </div>
    </div>
  )
}

function SearchBar() {
    return (
        <div>
            <input type="text" className="p-[2px] md:p-2 border-[1px] border-gray-300 rounded-lg text-sm" placeholder="Search for images" />
        </div>
    )
}

function UserIcon({ user }) {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    const handleSignOut = async() => {
        try {
            await signOut(auth);
            console.log('User signed out');
        } catch (error) {
            console.error('Sign out error: ', error);
        }
    }

    return (
    <div className="mx-[5px] md:mx-2 p-[5px] relative">
        {
            user ? (
                <div>
                    <div onClick={toggleDropdown} className="relative group">
                        <Image src={account} alt="User" className="nav-icon"/>
                        <div className="tooltip-text">
                            <p>{user.displayName}</p>
                        </div>
                    </div>

                    {isOpen && (
                    <div className='dropdown-bar'>
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <Link href={`/profile/${user.uid}`} className='dropdown-item'>Profile</Link>
                            <Link href="/settings" className='dropdown-item'>Settings</Link>
                            <button onClick={handleSignOut} className='dropdown-item'>Log Out</button>
                        </div>
                    </div>)}
                </div>
            ) : (
                <Link href="/login" className='hover:text-gray-500'>Log in</Link>
            )
        }
    </div>
    );
}

export default Header