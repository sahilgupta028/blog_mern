"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../profile/components/Navbar';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    const username = localStorage.getItem('username');
    

    try {
      console.log(title);

      const response = await fetch(`http://localhost:8080/api/v1/profile/${username}/post`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          title,
          description,
        }),
      });

      console.log(response.status);

      if (response.ok) {
        console.log('Post created successfully');
        router.push('/profile');
      } else {
        console.error('Failed to create post');
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 to-gray-800 font-mono">
  <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
    <h1 className="text-3xl font-extrabold mb-6 text-center text-blue-600 underline">Create a Post</h1>
    <form onSubmit={handleFormSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2 underline">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Enter the title of your post"
          required
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-gray-700 font-bold mb-2 underline">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="5"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Write a brief description"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full transition-all duration-300 ease-in-out"
      >
        Create Post
      </button>
    </form>
  </div>
</div>
</div>
  );
};

export default CreatePost;
