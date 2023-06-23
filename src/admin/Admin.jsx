import React from 'react';
import './Admin.css';
import {auth} from '../firebase/firebase';
import SidebarTest from "../components/sidebar/SidebarTest";
import {useNavigate} from 'react-router-dom';

const Admin = () => {
    // const navigate = useNavigate();
    // const handleSignOut = () => {
    //     auth.signOut()
    //     navigate('/');
    // }

    return (
        <>
            {/*<button onClick={handleSignOut}>Sign Out</button>*/}
            <SidebarTest activePage="home"/>

        </>
    );
};

export default Admin;
