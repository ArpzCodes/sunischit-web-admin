import "./Home.css"
import React from "react";
import HeadHome from "../components/nav/HeadHome";

function Home() {


    return (
        <>
            <HeadHome/>
            <div className="container">
                <div className="titleContainer">
                    <h1 className="title">The Sunischit App</h1>
                    <p className="titleP">Assuring your child's safety</p>
                </div>
            </div>
        </>

    );
}

export default Home;

