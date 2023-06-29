import React from 'react';
import './Admin.css';
import {auth} from '../firebase/firebase';
import SidebarTest from "../components/sidebar/SidebarTest";
import {useNavigate} from 'react-router-dom';

const Admin = () => {


    return (
        <>
            <SidebarTest activePage="home"/>
            <div className="content">
              
            </div>
        </>

    );
};

export default Admin;
