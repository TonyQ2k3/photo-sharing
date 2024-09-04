'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {add, heart, home, account} from '@/public'
import IconWithTooltip from './IconWithTooltip'

function Header() {
  return (
    <div className="w-full border-b-2 border-gray-300">
        <div className='flex justify-between items-center w-full lg:w-3/4 mx-auto py-2'>
            <h1 className="font-merienda font-semibold text-lg md:text-2xl mx-2">PixShare</h1>
            <SearchBar />
            <nav className='flex'>
                <Link href="#" className="nav-wrapper">
                    <IconWithTooltip src={home} alt="Home" tooltip="Home" />
                </Link>
                <Link href="#" className="nav-wrapper">
                    <IconWithTooltip src={add} alt="New post" tooltip="New post" />
                </Link>
                <Link href="#" className="nav-wrapper">
                    <IconWithTooltip src={heart} alt="Favorites" tooltip="Favorites" />
                </Link>
                <Link href="/auth/login">
                    <UserIcon />
                </Link>
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

function UserIcon() {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    return (
    <div className="mx-[5px] md:mx-2 p-[5px] relative">
        {/* <div onClick={toggleDropdown} className="">
            <Image src={account} alt="User" className="nav-icon"/>
        </div>

        {isOpen && (
        <div className='dropdown-bar'>
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <Link href="/profile" className='dropdown-item'>Profile</Link>
                <Link href="/settings" className='dropdown-item'>Settings</Link>
                <Link href="/logout" className='dropdown-item'>Log Out</Link>
            </div>
        </div>
        )} */}
        <p className='hover:text-gray-500'>Log In</p>
    </div>
    );
}

export default Header