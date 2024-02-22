import React from 'react';
// import { Link } from 'react-router-dom';


const Dashboard = () => {
    return (
        <div>
            <h1 className="text-center">Dashboard</h1>
            <div className="bg-gray-800 text-white h-screen sticky top-0">
      <div className="p-6">
        <h2 className="text-2xl font-semibold">Dashboard</h2>
        <p className="text-gray-400">Welcome to your dashboard!</p>
      </div>
      <nav className="p-6">
        <ul>
          <li className="mb-1">
            <a href="# " className="block text-gray-300 hover:text-white">
              Sales
            </a>
          </li>
          <li className="mb-1">
            <a href="# " className="block text-gray-300 hover:text-white">
              Profile
            </a>
          </li>
          <li className="mb-1">
            <a href="# " className="block text-gray-300 hover:text-white">
              Settings
            </a>
          </li>
          <li className="mb-1">
            <a href="# " className="block text-gray-300 hover:text-white">
              Applications
            </a>
          </li>
          <li className="mb-1">
            <a href="# " className="block text-gray-300 hover:text-white">
              Users
            </a>
          </li>
        </ul>
      </nav>
    </div>
        </div>
    );
};

export default Dashboard;