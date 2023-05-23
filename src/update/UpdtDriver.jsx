import React, { useEffect, useState } from 'react';
import { db, auth } from '../firebase/firebase';

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
    <div>
      <h2>Update Drivers</h2>
      <table>
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
        <tbody>
          {drivers.map((driver) => (
            <tr key={driver.id}>
             
              <td>{driver.email}</td>
              <td>{driver.busNo}</td>
              <td>{driver.firstName}</td>
              <td>{driver.lastName}</td>
              <td>{driver.number}</td>
              <td>{driver.route}</td>
              <td>
                <button onClick={() => handleUpdateDriver(driver)}>Edit</button>
                <button onClick={() => handleDeleteDriver(driver.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {updateDriver && (
        <div>
          <h3>Update Driver</h3>
          <form>
            <label>
              Email:
              <input
                type="email"
                value={updateEmail}
                onChange={(e) => setUpdateEmail(e.target.value)}
              />
            </label>
            <br />
            <label>
              Bus Number:
              <input
                type="text"
                value={updateBusNo}
                onChange={(e) => setUpdateBusNo(e.target.value)}
              />
            </label>
            <br />
            <label>
              First Name:
              <input
                type="text"
                value={updateFirstName}
                onChange={(e) => setUpdateFirstName(e.target.value)}
              />
            </label>
            <br />
            <label>
              Last Name:
              <input
                type="text"
                value={updateLastName}
                onChange={(e) => setUpdateLastName(e.target.value)}
              />
            </label>
            <br />
            <label>
              Number:
              <input
                type="text"
                value={updateNumber}
                onChange={(e) => setUpdateNumber(e.target.value)}
              />
            </label>
            <br />
            <label>
              Route:
              <input
                type="text"
                value={updateRoute}
                onChange={(e) => setUpdateRoute(e.target.value)}
              />
            </label>
            <br />
            <button type="button" onClick={handleSaveUpdate}>
              Save
            </button>
            <button type="button" onClick={clearUpdateForm}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdtDriver;
