import React, {useState} from 'react';
import {auth, db} from '../firebase/firebase';
import SidebarTest from "../components/sidebar/SidebarTest";

const RegUser = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [number, setNumber] = useState('');
    const [pickup, setPickup] = useState('');
    const [route, setRoute] = useState('');
    const [registrationError, setRegistrationError] = useState('');
    const [registrationSuccess, setRegistrationSuccess] = useState('');

    const handleRegistration = async (e) => {
        e.preventDefault();

        try {

            const userCredential = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            // Clear previous error messages, if any
            setRegistrationError('');
            setRegistrationSuccess('');

            // Save user details to Firestore
            await db.collection('users').doc(userCredential.user.uid).set({
                email,
                firstName,
                lastName,
                number,
                pickup,
                route,
            });

            // Set registration success message to show later
            setRegistrationSuccess("Registration successful!")
        } catch (error) {
            // Set error message for unsuccessful registration
            setRegistrationError(error.message);
        }
    };

    return (

        <div className="">
            {/*Sidebar Test takes activePage to know which page to highlight in sidebar.
            As the current page is regDriver, activePage is passed as viewUser.*/}
            <SidebarTest activePage="regUser"/>
            <div className="col-md-6 ps-4 content pt-3">
                <h2 className="align-content-center">User Registration Form</h2>
                <form className="row g-3 pt-3" onSubmit={handleRegistration}>
                    {/* if registration is done, show an alert box with the success message  */}
                    {registrationSuccess && <div className="alert alert-success">{registrationSuccess}</div>}
                    {/* if registration is not done, an alert box appears, with the error message   */}
                    {registrationError && <div className="alert alert-warning">{registrationError}</div>}
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4"
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword4"
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="inputEmail4"
                               value={firstName}
                               onChange={(e) => setFirstName(e.target.value)}/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="inputPassword4"
                               value={lastName}
                               onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">Number</label>
                        <input type="text" className="form-control" id="inputCity"
                               value={number}
                               onChange={(e) => setNumber(e.target.value)}/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputState" className="form-label">Route</label>
                        <input type="text" id="inputState" className="form-control"
                               value={route}
                               onChange={(e) => setRoute(e.target.value)}/>
                    </div>
                    {/*<div className="col-md-6">*/}
                    {/*    <label htmlFor="Pickup" className="form-label">Pickup</label>*/}
                    {/*    <input type="text" className="form-control" id="Pickup"*/}
                    {/*           value={pickup}*/}
                    {/*           onChange={(e) => setPickup(e.target.value)}/>*/}
                    {/*</div>*/}
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>


        </div>
    );
};

export default RegUser;
