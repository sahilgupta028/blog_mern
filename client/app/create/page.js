"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

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
    <div className="flex items-center justify-center min-h-screen">
      <div className="container mx-auto p-6 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 rounded-lg shadow-md font-serif">
        <h1 className="text-3xl font-extrabold mb-4 flex justify-center underline">Create a Post</h1>
        <form onSubmit={handleFormSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-bold mb-2 underline">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-bold mb-2 underline">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="5"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
