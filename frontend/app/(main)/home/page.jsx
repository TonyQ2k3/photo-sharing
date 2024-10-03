import React from 'react';
import { auth } from '@/lib/firebase';


function Home() {
  const user = auth.currentUser;
  return (
    <div>
        
    </div>
  )
}

export default Home