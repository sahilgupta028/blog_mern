"use client";
import React, { useState, useEffect } from 'react';
import Navbar from '../profile/components/Navbar';

const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await response.json();
      console.log(data);
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-900 to-blue-900 min-h-screen py-12 font-mono">
  <h2 className="text-4xl font-semibold text-center text-white mb-8 underline">All Posts</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {posts.map((post) => (
      <div key={post._id} className="bg-white rounded-lg overflow-hidden shadow-md m-5 transform transition duration-300 hover:scale-105">
        <div className="px-6 py-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2 flex justify-center underline capitalize">{post.title}</h3>
          <p className="text-gray-600">{post.description}</p>
          <p className="text-slate-400 text-center mt-4">Written by @{post.username}</p>
        </div>
      </div>
    ))}
  </div>
</div>
  );
};

export default AllPosts;