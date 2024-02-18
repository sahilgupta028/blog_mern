"use client";
// pages/Register.js
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          username,
          email,
          password,
        }),
      });

      console.log(response);
      
      if (response.ok) {
        console.log('Registration successful');
        localStorage.setItem('username', username);
        router.push('/profile');
      } else {
        const data = await response.json();
        console.error('Registration failed:', data.error || 'Unknown error');
      }
    } catch (error) {
      console.error('Error during registration:', error.message || 'Unknown error');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-blue-900 font-serif">
  <div className="max-w-md w-full p-8 bg-white rounded-md shadow-lg">
    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">🌟 Register</h2>
    <form className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-800">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full p-3 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 transition duration-300"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="username" className="block text-sm font-semibold text-gray-800">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="w-full p-3 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 transition duration-300"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full p-3 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 transition duration-300"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full p-3 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 transition duration-300"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        type="button"
        className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300"
        onClick={handleRegister}
      >
        Register
      </button>
    </form>
    <div className="flex justify-center items-center mt-4">
      <p className="text-sm text-gray-800">Already have an account?</p>
      <Link href="/login">
        <button className="ml-2 text-blue-500 hover:underline">Login Now</button>
      </Link>
    </div>
  </div>
</div>
  );
};

export default Register;


