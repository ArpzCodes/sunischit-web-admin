import React, { useState } from 'react';
import { db } from '../firebase/firebase';

const InsertData = () => {
  const [routeNumber, setRouteNumber] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [insertionError, setInsertionError] = useState('');

  const handleInsertData = async (e) => {
    e.preventDefault();

    try {
      const routeRef = db.collection('routes').doc(routeNumber);
      const doc = await routeRef.get();

      if (!doc.exists) {
        // Route document doesn't exist, create a new one
        await routeRef.set({
          [1]: { latitude, longitude }, // Initial auto-incremented field
        });
      } else {
        // Route document exists, get the latest auto-incremented field
        const routeData = doc.data();
        const latestField = Object.keys(routeData).pop();
        const newField = parseInt(latestField, 10) + 1;

        // Add the new field with latitude and longitude
        await routeRef.update({
          [newField]: { latitude, longitude },
        });
      }

      alert('Data inserted successfully!');
      clearForm();
    } catch (error) {
      console.error('Error inserting data:', error);
      setInsertionError('Error inserting data. Please try again.');
    }
  };

  const clearForm = () => {
    setRouteNumber('');
    setLatitude('');
    setLongitude('');
    setInsertionError('');
  };

  return (
    <div>
      <h2>Insert Data</h2>
      <form onSubmit={handleInsertData}>
        <label>
          Route Number:
          <input
            type="text"
            value={routeNumber}
            onChange={(e) => setRouteNumber(e.target.value)}
          />
        </label>
        <br />
        <label>
          Latitude:
          <input
            type="text"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
          />
        </label>
        <br />
        <label>
          Longitude:
          <input
            type="text"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
          />
        </label>
        <br />
        {insertionError && <p>{insertionError}</p>}
        <button type="submit">Insert</button>
      </form>
    </div>
  );
};

export default InsertData;
