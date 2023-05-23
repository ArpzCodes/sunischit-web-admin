import React, { useState } from 'react';
import { auth, db } from '../firebase/firebase';

const RegDriver= () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busNo, setBusNo] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [number, setNumber] = useState('');
  const [route, setRoute] = useState('');
  const [registrationError, setRegistrationError] = useState('');

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      // Create user in Firebase Authentication
      const userCredential = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      // Clear previous error messages, if any
      setRegistrationError('');

      // Save driver details to Firestore
      await db.collection('drivers').doc(userCredential.user.uid).set({
        email,
        busNo,
        firstName,
        lastName,
        number,
        route,
      });

      // Show registration success message
      alert('Registration successful!');
    } catch (error) {
      // Show error message for unsuccessful registration
      setRegistrationError(error.message);
    }
  };

  return (
    <div>
      <h2>Driver Registration Form</h2>
      <form onSubmit={handleRegistration}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          Bus Number:
          <input
            type="text"
            value={busNo}
            onChange={(e) => setBusNo(e.target.value)}
          />
        </label>
        <br />
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Number:
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </label>
        <br />
        <label>
          Route:
          <input
            type="text"
            value={route}
            onChange={(e) => setRoute(e.target.value)}
          />
        </label>
        <br />
        {registrationError && <p>{registrationError}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegDriver;
