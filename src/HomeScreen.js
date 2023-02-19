import React from "react";
import "../src/HomeScreen.css";
import Nav from "../src/Nav";
import Banner from "./Banner";

function HomeScreen() {
    return (
    <div className="homeScreen">
        <Nav />

        <Banner />

        {/* Row */}
    </div>
    );
}

export default HomeScreen;