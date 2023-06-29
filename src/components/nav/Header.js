import React from "react";

const Header = ({activePage}) => {
    return (
        <>
            <div className="container ">

                <header
                    className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 ">
                    <div className="col-md-3 mb-2 ">

                    </div>

                    <ul className="nav col-10 me-auto  col-md-auto mb-4 justify-content-center mb-md-0">

                        <h1><span className="coloured-blue">Sunischit </span> Web Admin</h1>
                    </ul>


                </header>
            </div>


        </>
    )
}

export default Header;