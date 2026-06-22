import React from 'react';

export default function Sidebar({ isOpen, closeSidebar }: { isOpen: boolean, closeSidebar: () => void }) {
  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={closeSidebar}></div>}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={closeSidebar}>×</button>
        <h3>หมวดหมู่</h3>
        <ul className="sidebar-menu">
          <li><a href="#">เมนูยอดนิยม</a></li>
          <li><a href="#">ทำอาหารด่วน</a></li>
          <li><a href="#">ของหวาน</a></li>
          <li><a href="#">เมนูเพื่อสุขภาพ</a></li>
        </ul>
      </aside>
    </>
  );
}
