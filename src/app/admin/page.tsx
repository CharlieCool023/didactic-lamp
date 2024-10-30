import React from 'react';

const AdminDashboard = () => {
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
        </div>
      </div>

    </div>
  );
};

export default AdminDashboard;
