"use client"

import React, { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import PostCard from '@/app/components/PostCard';

function PostList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
                const querySnapshot = await getDocs(q);
                
                const postsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
    
                setPosts(postsData);
            } catch (error) {
                console.error('Error fetching posts:', error);
            } finally {
                setLoading(false);
            }
        };
    
        fetchPosts();
      }, []);

    return (
        <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">All Posts</h1>
            {loading ? (
                <p className="text-center">Loading posts...</p>
            ) : (
            <div className="grid grid-cols-1 gap-4">
              {posts.map(post => (
                <PostCard post={post} />
              ))}
            </div>
          )}
        </div>
    );
}

export default PostList