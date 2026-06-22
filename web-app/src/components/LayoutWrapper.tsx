"use client";

import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="app-layout">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="main-body">
        <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
        <div className="content-area">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}
