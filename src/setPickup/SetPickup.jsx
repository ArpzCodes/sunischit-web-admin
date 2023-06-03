import React, {useEffect, useRef, useState} from "react";
import {db} from '../firebase/firebase';
import {firebase} from '../firebase/firebase';
import SidebarTest from "../components/sidebar/SidebarTest";

const SetPickup = () => {
    const mapRef = useRef(null);
    const [clickedLocation, setClickedLocation] = useState(null);
    const [route, setRoute] = useState("");
    const [datainsertError, setdatainsertError] = useState('');

    useEffect(() => {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${"AIzaSyDUfKfNZOFwyGAt6b6wAB4uSLAO8n9PZVg"}`;
        script.async = true;
        script.defer = true;

        script.addEventListener("load", initializeMap);

        document.body.appendChild(script);

        return () => {
            script.removeEventListener("load", initializeMap);
        };
    }, []);

    const initializeMap = () => {
        const map = new window.google.maps.Map(mapRef.current, {
            center: {lat: 27.7122268035, lng: 85.3426433256},
            zoom: 13,
            clickableIcons: false, // Disable click events on markers and other elements
        });

        const marker = new window.google.maps.Marker({
            map: map,
            position: {lat: 27.7122268035, lng: 85.3426433256},
            draggable: true,
        });

        map.addListener("click", (event) => {
            const lat = event.latLng.lat();
            const lng = event.latLng.lng();
            setClickedLocation({lat, lng});
            marker.setPosition({lat, lng});
        });

        const mapContainer = document.querySelector(".map-container");
        mapContainer.style.cursor = "auto"; // Set the cursor style to auto (normal mouse)
    };

    const handleRouteChange = (event) => {
        setRoute(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const documentRef = db.collection('route').doc('1').get();
            console.table(documentRef)


            // Save driver details to Firestore
            //   await db.collection('route').doc("1").get({
            //   route
            //   });

            // Show registration success message
            alert('Registration successful!');
        } catch (error) {
            // Show error message for unsuccessful registration
            alert(error.message);
        }
    };


    return (
        <div className="d-flex">
            <SidebarTest activePage="setPickup"/>
            <div className="ps-4 pt-3 container-fluid">
                <form onSubmit={handleSubmit}>
                    <label>
                        Route:
                        <input type="text" value={route} onChange={handleRouteChange}/>
                    </label>
                    <button type="submit">Set Pickup</button>
                </form>
                <h1>
                    Clicked Location:{" "}
                    {clickedLocation
                        ? `${clickedLocation.lat}, ${clickedLocation.lng}`
                        : "None"}
                </h1>
                <div
                    className="map-container"
                    style={{height: "calc(100vh - 200px)"}}
                    ref={mapRef}
                ></div>
            </div>
        </div>
    );
};

export default SetPickup;
