import React, {useState} from 'react';
import {auth} from '../firebase/firebase';
import {Route, Routes, useNavigate} from 'react-router-dom';
import "./Login.css"

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (email == "admin@gmail.com") {


            auth
                .signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // Clear previous error messages, if any
                    setLoginError('');

                    // Show login successful message
                    navigate('/admin');
                })
                .catch((error) => {
                    // Show error message for unsuccessful login
                    setLoginError('Invalid email or password');
                    alert('Login error:', error);
                });
        } else {
            setLoginError("Not an admin")
        }
    };

    return (
        <div className="text-center" id="loginpage">
            <main className="form-signin w-100 m-auto">
                {loginError && <p>{loginError}</p>}
                <form onSubmit={handleLogin} className="border-9">
                    <img className="mb-4" src="https://picsum.photos/700/800" alt="" width="72" height="57"/>
                    <h1 className="h3 mb-3 fw-normal">Admin Login</h1>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" value={email}
                               onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com"/>
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" value={password}
                               onChange={(e) => setPassword(e.target.value)} className="form-control"
                               id="floatingPassword" placeholder="Password"/>
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me"/> Remember me
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p>
                </form>
            </main>
        </div>
    );
};

export default Login;
