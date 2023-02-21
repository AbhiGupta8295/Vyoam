import React from "react";
import "../css/header.css";

import { FaRegUserCircle } from "react-icons/fa";

function Header() {
  return (
    <nav>
      <div className="logo">
        <h1>VYOAM</h1>
        <h4>An AI & Embedded Solutions</h4>
      </div>
        <a href="/">
          Services
        </a>
        <a href="/">
          All Courses
        </a>
        <a href="/">
          For Organizations
        </a>
        <a href="/">
          Career Support
        </a>
        <a href="/">
          Blog
        </a>
        <a href="/">
          Events
        </a>
        <a href="/" className="profile_icon">
          <FaRegUserCircle size={40} />
        </a>
      
    </nav>
  );
}

export default Header;
