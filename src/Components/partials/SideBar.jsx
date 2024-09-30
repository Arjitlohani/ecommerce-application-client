import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/addcategory">Add Category</Link></li>
        <li><Link to="/adduser">Add Users</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
