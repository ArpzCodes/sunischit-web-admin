import "./Home.css"
import React from "react";
import HeadHome from "../components/nav/HeadHome";

function Home() {


    return (
        <>
            <HeadHome/>
            <div className="container-fluid">
                <div className="row ms-3">
                    <div className="col">
                        <img src="./login.png" alt="" width="217.5" height="476.25"/>
                    </div>
                    <div className="col-md-7 ">
                        <div className="mt-5 pt-4">
                            <div className=" d-flex align-items-center justify-content-center ">
                                <h1 className='text big'>The <span className="coloured-orange">Sunischit </span> App
                                </h1>
                            </div>
                            <div className=" d-flex align-items-center justify-content-center ">
                                <p className='text fs-4'>Assuring your child's safety </p>
                            </div>
                            <div className=" d-flex align-items-center justify-content-center">
                                <img src="./deerwalkBus.png" alt=""/>
                            </div>
                        </div>
                        <div className=" mt-5 d-flex align-items-center justify-content-center ">
                            <p className='text fs-6'>Developers: Aarnov Adhikari(Backend), Arpan Acharya (Full
                                Stack), Sashwat Paudel (Frontend) </p>
                        </div>
                        <div className=" mt-3 d-flex align-items-center justify-content-center ">
                            <p className='text  fs-6'><a className=' text-black'
                                                         href="mailto:sunischitapp@gmail.com"> sunischitapp@gmail.com</a>
                            </p>
                        </div>
                    </div>

                    <div className="col">
                        <img src="./map.png" width="217.5" height="476.25" alt=""/>
                    </div>
                </div>
            </div>
        </>


    );
}

export default Home;

