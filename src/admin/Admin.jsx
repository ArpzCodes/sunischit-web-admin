import React from 'react';
import './Admin.css';

const Admin = () => {
  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <ul>
        <a href="regDriver"> <li>Register Drivers</li></a>
        <a href="regUser"> <li>Register Users</li></a>
        <a href="updtUser">  <li>Update Users</li></a>
        <a href="updtDriver"><li>Update Drivers</li></a>
        <a href="setPickup"><li>Set Pickup</li></a>
       
       
      
        
      </ul>
    </div>
  );
};

export default Admin;
