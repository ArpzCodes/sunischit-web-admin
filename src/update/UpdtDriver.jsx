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

    const handleDeleteDriver = async (driverId) => {
        try {
            await db.collection('drivers').doc(driverId).delete();
            await auth.currentUser.delete();

            alert('Driver deleted successfully!');
            fetchDrivers();
        } catch (error) {
            console.error('Error deleting driver:', error);
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
                                            <label>
                                                Email:
                                                <input
                                                    type="email"
                                                    value={updateEmail}
                                                    onChange={(e) => setUpdateEmail(e.target.value)}
                                                />
                                            </label>
                                            <br/>
                                            <label>
                                                Bus Number:
                                                <input
                                                    type="text"
                                                    value={updateBusNo}
                                                    onChange={(e) => setUpdateBusNo(e.target.value)}
                                                />
                                            </label>
                                            <br/>
                                            <label>
                                                First Name:
                                                <input
                                                    type="text"
                                                    value={updateFirstName}
                                                    onChange={(e) => setUpdateFirstName(e.target.value)}
                                                />
                                            </label>
                                            <br/>
                                            <label>
                                                Last Name:
                                                <input
                                                    type="text"
                                                    value={updateLastName}
                                                    onChange={(e) => setUpdateLastName(e.target.value)}
                                                />
                                            </label>
                                            <br/>
                                            <label>
                                                Number:
                                                <input
                                                    type="text"
                                                    value={updateNumber}
                                                    onChange={(e) => setUpdateNumber(e.target.value)}
                                                />
                                            </label>
                                            <br/>
                                            <label>
                                                Route:
                                                <input
                                                    type="text"
                                                    value={updateRoute}
                                                    onChange={(e) => setUpdateRoute(e.target.value)}
                                                />
                                            </label>
                                            <br/>

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
