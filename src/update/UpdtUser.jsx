
import React, { useEffect, useState } from 'react';
import { db, auth } from '../firebase/firebase';

const UpdtUser = () => {
  const [users, setUsers] = useState([]);
  const [updateUser, setUpdateUser] = useState(null);
  const [updateEmail, setUpdateEmail] = useState('');
  const [updateFirstName, setUpdateFirstName] = useState('');
  const [updateLastName, setUpdateLastName] = useState('');
  const [updateNumber, setUpdateNumber] = useState('');
  const [updatePickup, setUpdatePickup] = useState('');
  const [updateRoute, setUpdateRoute] = useState('');

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

  const handleUpdateUser = async (user) => {
    setUpdateUser(user);
    setUpdateEmail(user.email);
    setUpdateFirstName(user.firstName);
    setUpdateLastName(user.lastName);
    setUpdateNumber(user.number);
    setUpdatePickup(user.pickup);
    setUpdateRoute(user.route);
  };

  const handleSaveUpdate = async () => {
    try {
      await db.collection('users').doc(updateUser.id).update({
        email: updateEmail,
        firstName: updateFirstName,
        lastName: updateLastName,
        number: updateNumber,
        pickup: updatePickup,
        route: updateRoute,
      });

      alert('User updated successfully!');
      fetchUsers();
      setUpdateUser(null);
      clearUpdateForm();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await db.collection('users').doc(userId).delete();
      await auth.currentUser.delete();

      alert('User deleted successfully!');
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const clearUpdateForm = () => {
    setUpdateEmail('');
    setUpdateFirstName('');
    setUpdateLastName('');
    setUpdateNumber('');
    setUpdatePickup('');
    setUpdateRoute('');
  };

  return (
    <div>
      <h2>Update Users</h2>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Number</th>
            <th>Pickup</th>
            <th>Route</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.email}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.number}</td>
              <td>{user.pickup}</td>
              <td>{user.route}</td>
              <td>
                <button onClick={() => handleUpdateUser(user)}>Edit</button>
                <button onClick={() => handleDeleteUser(user.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {updateUser && (
        <div>
          <h3>Update User</h3>
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
              Pickup:
              <input
                type="text"
                value={updatePickup}
                onChange={(e) => setUpdatePickup(e.target.value)}
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

export default UpdtUser;

