import React from 'react';
import PostList from './PostList';


function Home() {
  return (
    <div className="w-full flex">
      <div className=" w-[70%]">
        <PostList />
      </div>
      <div className="border-l-2 border-gray-300 w-[30%] max-w-3xl mx-auto mt-2 p-4">
        <h2 className="text-lg font-bold mb-4">Following</h2>

      </div>
    </div>
  )
}

export default Home