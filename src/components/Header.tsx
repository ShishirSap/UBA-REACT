import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <div>
        <button className="text-sm bg-blue-500 text-white px-4 py-2 rounded">Logout</button>
      </div>
    </header>
  );
};

export default Header;