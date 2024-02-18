"use client";
import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Post from './components/Post';

const profile = () => {
  const [userData, setUserData] = useState(null);
  // const [post, setPost] = useState(null);
  const username = localStorage.getItem('username');
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/profile/${username}`);
        if (response.ok) {
          const userData = await response.json();
          setUserData(userData);
          console.log(userData.posts);
          // setPost(userData.posts);
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (username) {
      fetchUserData();
    }
  }, []);

  if (!username) {
    // If username is not available yet, return loading state
    return <Loader />
  }

  return (
    <div>
  <Navbar />
  <div className="container mx-auto mt-10 p-6 bg-gradient-to-br from-purple-900 to-blue-900 flex items-center flex-col text-white justify-center rounded-lg shadow-md font-serif">
    <h1 className="text-3xl font-bold mb-4 underline">Profile Page</h1>
    {userData && (
      <>
        <p className="text-lg mb-2">Name: {userData.name}</p>
        <p className="text-lg mb-2">Email-Id: {userData.email}</p>
      </>
    )}
  </div>
  <Post/>
</div>
  );
};

export default profile;

