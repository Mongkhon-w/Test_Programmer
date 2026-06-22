import React from 'react';

export default function Navbar({ toggleSidebar }: { toggleSidebar: () => void }) {
  return (
    <nav className="navbar">
      <button className="hamburger-btn" onClick={toggleSidebar}>
        ☰
      </button>
      <div className="navbar-logo">
        <h2>AppInTouch</h2>
      </div>
      <ul className="navbar-links">
        <li><a href="#">หน้าแรก</a></li>
        <li><a href="#">เมนูอาหาร</a></li>
        <li><a href="#">เกี่ยวกับเรา</a></li>
      </ul>
    </nav>
  );
}
