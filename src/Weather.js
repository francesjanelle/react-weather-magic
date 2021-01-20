import React, { useState } from "react"
import axios from "axious";
import "./index.css"

export default function Weather(props) {
    const [city, setCity] = useState("");
    const [text, setMessage] = useState("");

    function handleSearch(event) {
        event.preventDefault();

        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=deb4d0036edfa966c7a36750fd024ceb&units=metric`;
    axios.get(apiUrl).then(showTemp);
    }

    return (
        <div className="searchbox">
            <form onSubmit={handleSearch}> 

            </form>
        </div>
    )
}