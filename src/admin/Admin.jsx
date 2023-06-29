import React, {useEffect, useState} from 'react';
import './Admin.css';
import {firebase} from '../firebase/firebase';

import SidebarTest from "../components/sidebar/SidebarTest";
import {useNavigate} from 'react-router-dom';
import Header from "../components/nav/Header";

const Admin = () => {
    const [userCount, setUserCount] = useState(0);
    const [driverCount, setDriverCount] = useState(0);

    useEffect(() => {
        // Fetch the record counts from Firestore
        async function fetchRecordCounts() {
            try {
                const usersSnapshot = await firebase.firestore().collection('users').get();
                const usersCount = usersSnapshot.size;
                setUserCount(usersCount);

                const driversSnapshot = await firebase.firestore().collection('drivers').get();
                const driversCount = driversSnapshot.size;
                setDriverCount(driversCount);
            } catch (error) {
                console.error('Error fetching record counts:', error);
            }
        }

        fetchRecordCounts();
    }, []);

    return (
        <>
            <SidebarTest activePage="home"/>

            <div className="content">
                <Header></Header>

                <div className="col-md-11 mb-4">
                    <div className="row row-cols-1 row-cols-md-2 g-4 ms-2">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row-cols-2 d-sm-flex">
                                        <div className="col-md-10">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"
                                                 fill="currentColor" className="bi bi-person-lines-fill"
                                                 viewBox="0 0 16 16">
                                                <path
                                                    d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                                            </svg>
                                        </div>
                                        <div className="col-md-4">
                                            <h4>Users</h4>
                                            <p>{userCount}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">

                                <div className="card-body">
                                    <div className="row-cols-2 d-sm-flex">
                                        <div className="col-md-10">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"
                                                 fill="currentColor" className="bi bi-person-check-fill"
                                                 viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                      d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.486-2.487a.5.5 0 0 1 .708 0z"/>
                                                <path
                                                    d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                            </svg>
                                        </div>
                                        <div className="col-md-4">
                                            <h4>Drivers</h4>
                                            <p>{driverCount}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-11 ms-3 mt-4">
                    <div className="row align-items-md-stretch">
                        <div className="col-md-6">
                            <div className="h-auto p-5 text-bg-dark bg-gradient rounded-3">
                                <h2>Update Users</h2>
                                <a href="updtUser">
                                    <button className="btn btn-outline-light" type="button">Update</button>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="h-auto p-5 text-bg-dark bg-gradient border rounded-3">
                                <h2>Update Drivers</h2>
                                <p></p>
                                <a href="updtDriver">
                                    <button className="btn btn-outline-light" type="button">Update</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>


    );
};

export default Admin;
