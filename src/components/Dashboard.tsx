import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
        <Sidebar/>
        <div className="flex-1">
        <Header />
        <main className="p-4">

    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard Content</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow p-4">Card 1</div>
        <div className="bg-white shadow p-4">Card 2</div>
        <div className="bg-white shadow p-4">Card 3</div>
      </div>
    </div>
    </main>
    </div>
    </div>
  );
};

export default Dashboard;