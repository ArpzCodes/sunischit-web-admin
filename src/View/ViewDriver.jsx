import React, {useEffect, useState} from 'react';
import {db, auth} from '../firebase/firebase';
import SidebarTest from "../components/sidebar/SidebarTest";

const ViewDriver = () => {
    const [drivers, setDrivers] = useState([]);
    const [updateDriver, setUpdateDriver] = useState(null);
    const [updateEmail, setUpdateEmail] = useState('');
    const [updateBusNo, setUpdateBusNo] = useState('');
    const [updateFirstName, setUpdateFirstName] = useState('');
    const [updateLastName, setUpdateLastName] = useState('');
    const [updateNumber, setUpdateNumber] = useState('');
    const [updateRoute, setUpdateRoute] = useState('');

    useEffect(() => {

        fetchDrivers();
    }, []);

    const fetchDrivers = async () => {
        try {
            const driversSnapshot = await db.collection('drivers').get();
            const driversData = driversSnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setDrivers(driversData);
        } catch (error) {
            console.error('Error fetching drivers:', error);
        }
    };

    
    const clearUpdateForm = () => {
        setUpdateEmail('');
        setUpdateBusNo('');
        setUpdateFirstName('');
        setUpdateLastName('');
        setUpdateNumber('');
        setUpdateRoute('');
    };

    return (
        <div className="d-flex">
            <SidebarTest activePage="updtDriver"/>
            <div className=" ps-4 pt-3">
                <h2>View Drivers</h2>
                <table className="table  table-bordered">
                    <thead>
                    <tr>
                        <th>Email</th>
                        <th>Bus Number</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Number</th>
                        <th>Route</th>
                        
                    </tr>
                    </thead>
                    <tbody className="table-group-divider">
                    {drivers.map((driver) => (
                        <tr key={driver.id}>

                            <td>{driver.email}</td>
                            <td>{driver.busNo}</td>
                            <td>{driver.firstName}</td>
                            <td>{driver.lastName}</td>
                            <td>{driver.number}</td>
                            <td>{driver.route}</td>
                         
                        </tr>
                    ))}
                    </tbody>
                </table>

               
            </div>
        </div>
    );
};

export default ViewDriver;
