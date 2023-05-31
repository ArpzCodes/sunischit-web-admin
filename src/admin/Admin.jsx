import React from 'react';
import './Admin.css';
import Sidebar from "../components/sidebar/Sidebar";

const Admin = () => {
    return (
        <>
<Sidebar/>
            <div className="admin-panel">

                <h2 className="list-group">Admin Panel</h2>
                <ul className="list-group">
                    <a href="regDriver">
                        <li className="list-group-item">Register Drivers</li>
                    </a>
                    <a href="regUser">
                        <li className="list-group-item">Register Users</li>
                    </a>
                    <a href="updtUser">
                        <li className="list-group-item">Update Users</li>
                    </a>
                    <a href="updtDriver">
                        <li className="list-group-item">Update Drivers</li>
                    </a>
                    <a href="setPickup">
                        <li className="list-group-item">Set Pickup</li>
                    </a>


                </ul>
            </div>
        </>
    );
};

export default Admin;
