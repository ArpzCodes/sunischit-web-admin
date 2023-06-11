import React from "react";

function HeadHome() {
    return (
        <>
            <div className="container ">
                
                <header
                    className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 ">
                    <div className="col-md-3 mb-2 mb-md-0">

                    </div>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">

                        <img src="./sifalSchool.png" alt="" height="80" width="270"/>
                    </ul>


                    <div className="col-md-3 text-end">
                        <a href="/login">
                            <button type="button" className="btn btn-outline-primary me-2">Login</button>
                        </a>
                    </div>
                </header>
            </div>


        </>
    )
}

export default HeadHome;