import React, {useState, useEffect} from 'react';
import {auth} from '../firebase/firebase';
import {Route, Routes, useNavigate} from 'react-router-dom';
import "./Login.css"

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user && user.email === 'admin@gmail.com') {
                setLoggedIn(true);
            } else {
                setLoggedIn(false);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        if (email == "admin@gmail.com") {


            auth
                .signInWithEmailAndPassword(email, password)
                // .then((userCredential) => {
                //     // Clear previous error messages, if any
                //     setLoginError('');


                //     // Show login successful message
                //     //
                // })
                .catch((error) => {
                    // Show error message for unsuccessful login
                    setLoginError('Invalid email or password');
                    alert('Login error:', error);
                });
        } else {
            setLoginError("Not an admin")
        }
    };
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (loggedIn) {
        // return <Redirect to="/admin" />;
        navigate('/admin');
    }

    return (

        <div className="container text-center mt-4">
            <div className="row">
                <div className="col">
                </div>
                <div className="col mt-5 pt-3 ">
                    <div className="text-center ms-3 me-3" id="loginpage">
                        <main className="form-signin mt-3">
                            {loginError && <p>{loginError}</p>}
                            <form onSubmit={handleLogin} className="border-9">
                                <img src="./deerwalkLogo.png" alt="deerwalkLogo" height="80" width="80"
                                     className="mb-3"/>

                                <h1 className="h3 mb-3 fw-normal">Admin Login</h1>

                                <div className="form-floating mb-1">
                                    <input type="email" className="form-control" id="floatingInput" value={email}
                                           onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com"/>
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating mb-1">
                                    <input type="password" value={password}
                                           onChange={(e) => setPassword(e.target.value)} className="form-control"
                                           id="floatingPassword" placeholder="Password"/>
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>

                                <div className="checkbox mb-3 ">
                                    <label>
                                        <input type="checkbox" value="remember-me"/> Remember me
                                    </label>
                                </div>
                                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                                <p className="mt-5 mb-3 text-body-secondary"> Assuring our students' safety</p>
                            </form>
                        </main>
                    </div>
                </div>
                <div className="col">
                </div>
            </div>
        </div>

    );
};

export default Login;