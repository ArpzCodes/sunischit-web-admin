import React from 'react';
import './Sidebar.css';
import {useNavigate} from "react-router-dom";
import {auth} from "../../firebase/firebase"; // Import the CSS file for styling

//A prop for sidebar so that active page can be highlighted.
const Sidebar = ({activePage}) => {
    const navigate = useNavigate();
    const handleSignOut = () => {
        auth.signOut()
        navigate('/');
    }
    return (
        <>
            <div className="position-fixed">
                <div className="d-flex">
                    <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{width: '280px'}}>
                        <a href="/admin"
                           className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                            <img className="bi pe-none me-2" src="deerwalkLogo.png" width="50" height="50"
                                 alt="Logo"/>
                            <span className="fs-4 coloured-blue">Sunischit</span>
                        </a>
                        <hr/>
                        <ul className="nav nav-pills flex-column mb-auto" style={{marginBottom: '20px'}}>
                            <li>
                                <a href="admin" className={`nav-link ${activePage === 'home' ? 'active' : 'text-dark'}`}
                                   aria-current="page">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi pe-none me-2" width="16"
                                         height="16">
                                        <path
                                            d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>

                                    </svg>
                                    Home
                                </a>
                            </li>
                            <li>
                                {/*checks if the activePage is regUser, then puts active in the class.
                            same for all below */}
                                <a href="regUser"

                                   className={`nav-link ${activePage === 'regUser' ? 'active' : 'text-dark'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi pe-none me-2" width="16"
                                         height="16">
                                        <path
                                            d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
                                        <path
                                            d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"/>

                                    </svg>
                                    Register Users
                                </a>
                            </li>
                            <li>
                                <a href="regDriver"
                                   className={`nav-link ${activePage === 'regDriver' ? 'active' : 'text-dark'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi pe-none me-2" width="16"
                                         height="16">
                                        <path
                                            d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
                                        <path
                                            d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"/>

                                    </svg>
                                    Register Drivers
                                </a>
                            </li>

                            <li>
                                <a href="updtUser"
                                   className={`nav-link ${activePage === 'updtUser' ? 'active' : 'text-dark'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi pe-none me-2" width="16"
                                         height="16">
                                        <path
                                            d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Zm9.886-3.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"/>

                                    </svg>
                                    Update User
                                </a>
                            </li>
                            <li>
                                <a href="updtDriver"
                                   className={`nav-link ${activePage === 'updtDriver' ? 'active' : 'text-dark'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi pe-none me-2" width="16"
                                         height="16">
                                        <path
                                            d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Zm9.886-3.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"/>

                                    </svg>
                                    Update Drivers
                                </a>
                            </li>
                            <li>
                                {/*<a href="setPickup"*/}
                                {/*   className={`nav-link ${activePage === 'setPickup' ? 'active' : 'text-dark'}`}>*/}
                                {/*    <svg xmlns="http://www.w3.org/2000/svg" className="bi pe-none me-2" width="16"*/}
                                {/*         height="16">*/}
                                {/*        <path*/}
                                {/*            d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>*/}
                                {/*        <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"/>*/}

                                {/*    </svg>*/}
                                {/*    Set pickup*/}
                                {/*</a>*/}
                            </li>
                        </ul>
                        <hr/>
                        <div className="dropdown">
                            <a href=""
                               className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle"
                               data-bs-toggle="dropdown" aria-expanded="false">
                              <img className="bi pe-none me-2" src="image.png" width="32" height="32" radius
                                 alt="Logo"/>
                                <strong>Admin</strong>
                            </a>
                            <ul className="dropdown-menu text-small shadow">

                                <li><a className="dropdown-item" href="#">In progress</a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><a className="dropdown-item" href="#" onClick={handleSignOut}>Sign out</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="b-example-divider b-example-vr"></div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;