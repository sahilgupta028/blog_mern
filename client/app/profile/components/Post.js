"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Post = () => {
  const [posts, setPosts] = useState([]);
  const username = localStorage.getItem('username');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/posts/${username}`);
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleDeletePost = async (postId) => {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/posts/${postId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete post');
      }
      setPosts(posts.filter(post => post._id !== postId)); 
      console.log('Post deleted successfully');
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
  <div className="min-h-screen py-12 m-12 rounded-lg font-mono">
  <h2 className="text-4xl font-semibold text-center text-white mb-8 underline">My Posts</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {posts.map((post) => (
      <div key={post._id} className="bg-white rounded-lg overflow-hidden shadow-md m-5">
        <div className="px-6 py-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2 flex justify-center underline capitalize">{post.title}</h3>
          <p className="text-gray-600">{post.description}</p>
        </div>
        <div className="px-6 py-4 bg-gray-100 border-t border-gray-200 flex items-center justify-center">
          <button onClick={() => handleDeletePost(post._id)} className="text-red-600 hover:text-red-800 font-semibold focus:outline-none">Delete</button>
        </div>
      </div>
    ))}
  </div>
</div>
  );
};

export default Post;