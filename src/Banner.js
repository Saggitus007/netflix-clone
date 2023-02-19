import React, { useEffect, useState } from "react";
import "./Banner.css"
import axios from "./axios";
import requests from "./Requests";

function Banner() {
        const [movie, setMovie] = useState([]);

        useEffect (() => {
            async function fetchData(){
                const request = await axios.get(requests.fetchActionMovies);
                setMovie(
                    request.data.results[
                        Math.floor(Math.random() * request.data.results.length - 1)

                    ] 
                ); 
                return request;
            }
            fetchData();
    }, []);

    console.log(movie);
    console.log(movie.length)



    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }

    return( <header className="banner"
    style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/c/cd/Black_flag.svg)`,
        backgroundPosition: "centre centre",
    }}>

        <div className="banner_contents">
            <h1 className="banner_title">Movie Name</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My list</button>
                </div>
            <h1 className="banner_description">{truncate
                (`This is a test description This is a test description This is a test description This is a test description This is a test descriptionThis is a test description This is a test descriptionThis is a test description`, 
                    150)}
            </h1>
        </div>

        <div className="banner--fadeBottom" />

    </header>);
}

export default Banner;