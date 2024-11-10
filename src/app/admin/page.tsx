"use client";
import React from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const AdminDashboard = () => {

  const [userName, setUserName] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Here you would typically check if a user session exists (for example, using next-auth)
    // For now, we'll simulate a simple check
    // const user = JSON.parse(localStorage.getItem('user') || '{}');
    // if (user && user.name) {
    //   setUserName(user.name);
    // } else {
    //   router.push('/login'); // Redirect to login if not authenticated
    // }
  }, [router]);
  return (
    <div>
      <h1>Admin Dashboard</h1>
      {/* Add your admin dashboard components here */}
            <div className="flex">
        <div className="w-64 bg-gray-800 text-white p-4">
          {/* Sidebar content */}
          <ul>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">Users</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
          </ul>
        </div>
        <div className="flex-1 p-4">
          {/* Dashboard content */}
          <p>Welcome to the admin dashboard</p>
          <div>
      <h1>Welcome, {userName}!</h1>
      <p>This is the admin page.</p>
    </div>
        </div>
      </div>

    </div>
  );
};

export default AdminDashboard;
