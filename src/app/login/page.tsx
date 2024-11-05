'use client'
'tsx'
import React, { useState } from 'react';
import Link from 'next/link'; // Or import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  // ... (state and handleSubmit function remain the same) ...

  return (
    <div className="bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] min-h-screen flex items-center justify-center">
      <div className="bg-black text-white bg-gradient-to-b from-[#5D2CAB] to-black p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <form  className="space-y-4">
        {/* onSubmit={handleSubmit} */}
          {/* ... (username    and password input fields) ... */}
          <div>
            <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username:</label>
            <input
              type="text"
              id="username"
              // value={username}
              // onChange={(event) => setUsername(event.target.value)}
              className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline" // Added rounded-md and bg-gray-100
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password:</label>
            <input
              type="password"
              id="password"
              // value={password}
              // onChange={(event) => setPassword(event.target.value)}
              className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline" // Added rounded-md and bg-gray-100
            />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Login
          </button>
          <Link href="/register-producer"> {/* Or <Link to="/register-producer"> */}
            <a className="text-blue-500 hover:text-blue-700 text-center">Register as a producer</a>
          </Link> 
        </form>
      </div>
    </div>
  );
};

export default Login;
