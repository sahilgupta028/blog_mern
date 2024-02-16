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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 font-serif">
    <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md transition-transform transform hover:scale-105">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex justify-center">🌟 Register</h2>
      <form>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-3 border rounded-md focus:outline-none focus:border-blue-500 transition-all duration-300"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full p-3 border rounded-md focus:outline-none focus:border-blue-500 transition-all duration-300"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="emailid">
            Email-id
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border rounded-md focus:outline-none focus:border-blue-500 transition-all duration-300"
            placeholder="Enter your Email-id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-3 border rounded-md focus:outline-none focus:border-blue-500 transition-all duration-300"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-all duration-300"
          onClick={handleRegister}
        >
          Register
        </button>
      </form>
      <div className='flex flex-row text-gray-700 items-center mt-8 justify-center'>
        <h3 className='text-sm'>Already have an account?</h3>
        <Link href="/login">
          <button className="ml-2 text-sm flex flex-row hover:underline">Login Now</button>
        </Link>
      </div>
    </div>
  </div>
  );
};

export default Register;


