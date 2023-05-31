import React, {useState} from 'react';
import {auth, db} from '../firebase/firebase';
import SidebarTest from "../components/sidebar/SidebarTest";


const RegDriver = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [busNo, setBusNo] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [number, setNumber] = useState('');
    const [route, setRoute] = useState('');
    const [registrationError, setRegistrationError] = useState('');
    const [registrationSuccess, setRegistrationSuccess] = useState('');
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
            setRegistrationSuccess('');

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

            setRegistrationSuccess("Registration successful!")
        } catch (error) {
            // Show error message for unsuccessful registration
            setRegistrationError(error.message);
        }
    };

    return (
        <div className="d-flex bg-light">
            <SidebarTest activePage="regDriver"/>

            <div className="col-md-6 ps-4 pt-3">
                <h2 className="align-content-center">Driver Registration Form</h2>
                <form className="row g-3 pt-3" onSubmit={handleRegistration}>
                    {registrationSuccess && <div className="alert alert-success">{registrationSuccess}</div>}
                    {registrationError && <div className="alert alert-warning">{registrationError}</div>}
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" type="email"
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" type="password"
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">First Name</label>
                        <input type="email" className="form-control" id="inputEmail4" type="text"
                               value={firstName}
                               onChange={(e) => setFirstName(e.target.value)}/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Last Name</label>
                        <input type="password" className="form-control" id="inputPassword4" type="text"
                               value={lastName}
                               onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">Number</label>
                        <input type="text" className="form-control" id="inputCity" type="text"
                               value={number}
                               onChange={(e) => setNumber(e.target.value)}/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputState" className="form-label">Route</label>
                        <input type="text" id="inputState" className="form-control" type="text"
                               value={route}
                               onChange={(e) => setRoute(e.target.value)}/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="BusNum" className="form-label">Bus number</label>
                        <input type="text" className="form-control" id="BusNum" type="text"
                               value={busNo}
                               onChange={(e) => setBusNo(e.target.value)}/>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </div>
                </form>
            </div>


        </div>
    );
};

export default RegDriver;
