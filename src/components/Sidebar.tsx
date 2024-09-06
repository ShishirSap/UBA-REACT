import React, { useState } from 'react';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className=" md:hidden p-4 "
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
      <div className={`${isOpen ? 'block' : 'hidden'}  md:block fixed  md:w-64 h-screen  bg-gray-800 text-white p-4`}>
        <h2 className="overflow-y-auto text-2xl font-bold mb-6">Admin Dashboard</h2>
        <ul>
          <li className="mb-4"><a href="/dashboard/signup" className="hover:underline">Signup</a></li>
          <li className="mb-4"><a href="/dashboard/users" className="hover:underline">Users</a></li>
          <li className="mb-4"><a href="#" className="hover:underline">Settings</a></li>
          <li className="mb-4"><a href="#" className="hover:underline">Profile</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
