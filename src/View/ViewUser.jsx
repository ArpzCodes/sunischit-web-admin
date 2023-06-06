import React, {useEffect, useState} from 'react';
import {db, auth} from '../firebase/firebase';
import SidebarTest from "../components/sidebar/SidebarTest";

const ViewUser = () => {
    const [users, setUsers] = useState([]);
   

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const usersSnapshot = await db.collection('users').get();
            const usersData = usersSnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setUsers(usersData);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    

   


    return (
        <div className="d-flex">
            <SidebarTest activePage="updtUser"/>
            <div className=" ps-4 pt-3">
                <h2>View Users</h2>
                <table className="table  table-bordered">
                    <thead>
                    <tr>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Number</th>
                        <th>Pickup</th>
                        <th>Route</th>
                        
                    </tr>
                    </thead>
                    <tbody className="table-group-divider">
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.email}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.number}</td>
                            <td>{user.pickup}</td>
                            <td>{user.route}</td>
                            
                        </tr>
                    ))}
                    </tbody>
                </table>

           
                 
             
            </div>
        </div>
    );
};

export default ViewUser;

