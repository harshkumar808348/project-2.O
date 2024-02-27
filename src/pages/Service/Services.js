import React, { useState, useEffect } from 'react';
import './Sidebar.css'; // Import your CSS file

function AdminDashboard() {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const list = document.querySelectorAll(".navigation li");

    const activeLink = (e) => {
      list.forEach((item) => {
        item.classList.remove("hovered");
      });
      e.target.classList.add("hovered");
    };

    list.forEach((item) => item.addEventListener("mouseover", activeLink));

    return () => {
      list.forEach((item) => item.removeEventListener("mouseover", activeLink));
    };
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <div className="Sidebar">
      <div className={`navigation ${isActive ? 'active' : ''}`}>
        <ul>
          <li>
            <a href="#">
              <span className="title">Student-Login</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="title">Event Details</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="title">Messages</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="title">Help</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="title">Settings</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="title">Password</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="title">Sign Out</span>
            </a>
          </li>
        </ul>
      </div>
      <div className={`main ${isActive ? 'active' : ''}`}>
        <div className="topbar">
          <div className="toggle" onClick={handleToggle}>
            <ion-icon name="menu-outline"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
