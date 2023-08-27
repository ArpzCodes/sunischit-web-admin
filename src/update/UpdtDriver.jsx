import React, {useEffect, useState} from 'react';
import {db, auth} from '../firebase/firebase';
import SidebarTest from "../components/sidebar/SidebarTest";

const UpdtDriver = () => {
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

    const handleUpdateDriver = async (driver) => {
        setUpdateDriver(driver);
        setUpdateEmail(driver.email);
        setUpdateBusNo(driver.busNo);
        setUpdateFirstName(driver.firstName);
        setUpdateLastName(driver.lastName);
        setUpdateNumber(driver.number);
        setUpdateRoute(driver.route);
    };

    const handleSaveUpdate = async () => {
        try {


            await db.collection('drivers').doc(updateDriver.id).update({
                email: updateEmail,
                busNo: updateBusNo,
                firstName: updateFirstName,
                lastName: updateLastName,
                number: updateNumber,
                route: updateRoute,
            });

            alert('Driver updated successfully!');
            fetchDrivers();
            setUpdateDriver(null);
            clearUpdateForm();
        } catch (error) {
            console.error('Error updating driver:', error);
        }
    };

    const handleDeleteDriver = async (userId) => {
        try {
          // Make the API request to delete the user
          const response = await fetch('http://localhost:5000/api/delete-user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId }),
          });
      
          if (response.ok) {
            // User deleted successfully, update the user list
            await db.collection('drivers').doc(userId).delete();
            
            const updatedDrivers = drivers.filter((user) => user.id !== userId);
            alert('Driver deleted successfully!');
            setDrivers(updatedDrivers);
        
          } else {
            const error = await response.json();
            throw new Error(error.error); // Show error message
          }
        } catch (error) {
          console.error('Error deleting user:', error);
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
        <div className="">
            <SidebarTest activePage="updtDriver"/>
            <div className=" content ps-4 pt-3">
                <h2>Update Drivers</h2>
                <table className="table  table-bordered">
                    <thead>
                    <tr>
                        <th>Email</th>
                        <th>Bus Number</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Number</th>
                        <th>Route</th>
                        <th>Actions</th>
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
                            <td>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-outline-dark dropdown-toggle"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                        Action
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <button className="dropdown-item" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal"
                                                    onClick={() => handleUpdateDriver(driver)}>Edit
                                            </button>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <li>
                                            <button className="dropdown-item"
                                                    onClick={() => handleDeleteDriver(driver.id)}>Delete
                                            </button>
                                        </li>
                                    </ul>
                                </div>

                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Driver</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                {updateDriver && (
                                    <div>
                                        <form>
                                            <div className="mb-3 row">
                                                {/*Email*/}
                                                <label htmlFor="staticEmail"
                                                       className="col-sm-3 col-form-label">Email</label>
                                                <div className="col-sm-7">
                                                    <input type="text" readOnly className="form-control-plaintext"
                                                           id="staticEmail" value={updateEmail}
                                                           onChange={(e) => setUpdateEmail(e.target.value)}/>
                                                </div>
                                            </div>
                                            {/*Bus number*/}
                                            <div className="mb-3 row d-flex">
                                                <label htmlFor="busNum"
                                                       className="col-sm-3 col-form-label">Bus No.</label>
                                                <div className="col-sm-7">
                                                    <input type="text" className="form-control" id="busNum"
                                                           value={updateBusNo}
                                                           onChange={(e) => setUpdateBusNo(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            {/*First name*/}
                                            <div className="mb-3  row">
                                                <label htmlFor="Fname"
                                                       className="col-sm-3 col-form-label">First
                                                    name</label>
                                                <div className="col-sm-7">
                                                    <input className="form-control"
                                                           type="text"
                                                           value={updateFirstName}
                                                           onChange={(e) => setUpdateFirstName(e.target.value)}
                                                           id="Fname"/>
                                                </div>
                                            </div>

                                            {/*Last name*/}
                                            <div className="mb-3 row">
                                                <label htmlFor="Lname"
                                                       className="col-sm-3 col-form-label">Last Name</label>
                                                <div className="col-sm-7">
                                                    <input className="form-control" id="Lname"
                                                           type="text"
                                                           value={updateLastName}
                                                           onChange={(e) => setUpdateLastName(e.target.value)}

                                                    />
                                                </div>
                                            </div>
                                            {/*Number*/}
                                            <div className="mb-3 row">
                                                <label htmlFor="number"
                                                       className="col-sm-3 col-form-label">Number</label>
                                                <div className="col-sm-7">
                                                    <input className="form-control" id="number"
                                                           type="text"
                                                           value={updateNumber}
                                                           onChange={(e) => setUpdateNumber(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            {/*Route*/}
                                            <div className="mb-3 row">
                                                <label htmlFor="route"
                                                       className="col-sm-3 col-form-label">Route</label>
                                                <div className="col-sm-7">
                                                    <input className="form-control" id="route"
                                                           type="text"
                                                           value={updateRoute}
                                                           onChange={(e) => setUpdateRoute(e.target.value)}
                                                    />
                                                </div>
                                            </div>


                                        </form>
                                    </div>
                                )}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                        onClick={clearUpdateForm}>Close
                                </button>
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                                        onClick={handleSaveUpdate}>Save
                                    changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default UpdtDriver;
