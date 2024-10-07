"use client"

import React, { useEffect, useState } from 'react';
import { auth, db } from '@/lib/firebase';
import { onAuthStateChanged } from "firebase/auth";

function Profile() {
  const [user, setUser] = useState(null);

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
    <div className='w-full min-h-screen '>
        {/* User Profile */}
        <section className='flex flex-col items-center justify-center'>
            
        </section>
        {/* User Posts */}
        <section className='flex flex-col items-center justify-center'>

        </section>
    </div>
  )
}

export default Profile