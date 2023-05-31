import React from "react";

function HeadHome() {
    return (
        <>
        <div className="container-fluid  " id="custom_nav">
            <div className="container">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4  ">
                    <a href="/"
                       className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-black link-body-emphasis text-decoration-none">
                        <img className="bi me-2" width="40" height="32" role="img"
                             src="https://picsum.photos/200/300" alt=""/>
                        <span className="fs-3">Sunischit</span>
                    </a>
                    <ul className="nav nav-pills">
                        <li className="nav-item"><a href="/login" aria-current="page">
                            <button className="btn btn-outline-primary">Login</button>
                        </a>
                        </li>
                    </ul>
                </header>
            </div>
        </div>
        </>
    )
}
export default HeadHome;