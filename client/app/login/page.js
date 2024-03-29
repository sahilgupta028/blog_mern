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
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-900 to-purple-900 font-mono">
  <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">🚀 Login</h2>
    <form className="space-y-4">
      <div>
        <label htmlFor="username" className="block text-sm font-semibold text-gray-800">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="w-full p-3 border-b-2 border-gray-400 focus:outline-none focus:border-purple-500 transition duration-300"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full p-3 border-b-2 border-gray-400 focus:outline-none focus:border-purple-500 transition duration-300"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        type="button"
        className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-3 rounded-lg hover:bg-purple-700 transition duration-300"
        onClick={handleLogin}
      >
        Login
      </button>
    </form>
    <div className="flex justify-center items-center mt-4">
      <p className="text-sm text-gray-800">Don't have an account?</p>
      <Link href="/register">
        <button className="ml-2 text-purple-600 hover:underline">Register Now...</button>
      </Link>
    </div>
  </div>
</div>

  );
};

export default Login;
