import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex gap-4 min-h-screen max-w-7xl mx-auto">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <main className="flex-1 ml-0 transition-all duration-300 max-w-5xl">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;