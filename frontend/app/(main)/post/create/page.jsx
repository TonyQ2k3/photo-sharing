"use client"

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth, db, storage } from '@/lib/firebase';
import { onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';


function CreatePost() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  let downloadURL = '';
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        router.push('/login');
      }
    });
  }, []);
  
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user === null) return;
    if (!imageFile) return;

    // Create a storage reference
    const storageRef = ref(storage, `images/${imageFile.name}`);

    try {
      // Upload the image to Firebase Storage
      await uploadBytes(storageRef, imageFile);
      
      // Get the download URL
      await getDownloadURL(storageRef).then((url) => {
        downloadURL = url;
        console.log('downloadURL:', downloadURL);
      })
      .catch((error) => {
        console.error('Error getting download URL:', error);
        alert('Error uploading post, please try again.');
      });;
      

      // Save the caption and image URL to Firestore
      await setDoc(doc(db, 'posts', Date.now().toString()), {
        userId: user.uid,
        caption,
        imageUrl: downloadURL,
        createdAt: new Date(),
      });

      // Reset the form
      setCaption('');
      setImage(null);
      setImageFile(null);
      alert('Post uploaded successfully!');
    } 
    catch (error) {
      console.error('Error uploading post:', error);
      alert('Error uploading post, please try again.');
    }
  };

  return (
    <div className="max-w-md min-h-[90vh] mx-auto p-4 flex flex-col justify-center">
      <h1 className="text-2xl font-bold mb-4">Upload Your Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="border border-gray-300 rounded-md p-2"
          required
        />
        {image && (
          <img src={image} alt="Preview" className="w-full max-h-[50vh] rounded-md mb-4 object-cover" />
        )}
        <textarea
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="Write a caption..."
          className="border border-gray-300 rounded-md p-2 h-24"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition"
        >
          Post
        </button>
      </form>
  </div>
  )
}

export default CreatePost