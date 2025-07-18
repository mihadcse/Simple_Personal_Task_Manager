import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const username = localStorage.getItem('username');

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password'); // if you're storing it
    window.location.href = '/login';
  };

  return (
    <nav className="bg-violet-800 text-white shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link to="/" className="hover:text-gray-200">Personal Task Manager</Link>
      </div>
      <div className="space-x-4">
        {username ? (
          <button
            onClick={handleLogout}
            className="bg-stone-50 text-violet-800 font-semibold px-4 py-2 rounded hover:bg-red-600 hover:text-white transition-colors"
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="bg-stone-50 text-violet-800 font-semibold px-4 py-2 rounded hover:bg-green-500 hover:text-white transition-colors">
              Login
            </Link>
            <Link to="/register" className="bg-stone-50 text-violet-800 font-semibold px-4 py-2 rounded hover:bg-green-500 hover:text-white transition-colors">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
