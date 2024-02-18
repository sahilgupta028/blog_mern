// pages/Login.js
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Successful login
        // const val = username;
        const { authToken } = await response.json();
        localStorage.setItem('authToken', authToken); // Store authToken in localStorage
        console.log('Login successful');
        setUsername('');
        setPassword('');
        router.push('/profile');
        localStorage.setItem('username', username);
      } else {
        // Failed login
        console.error('Login failed');
        alert("Username or password is incorrect");
        setUsername('');
        setPassword('');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black font-serif">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md transition-transform transform hover:scale-105">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex justify-center">🚀 Login</h2>
        <form>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" >
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
            <label className="block text-gray-700 text-sm font-bold mb-2">
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
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
        <div className='flex flex-row text-black items-center mt-8 justify-center'>
          <h3 className='text-gray-700 text-sm'>Don't have an account?</h3>
          <Link href="/register">
            <button className="ml-2 text-gray-700 text-sm flex flex-row hover:underline">Register Now...</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
