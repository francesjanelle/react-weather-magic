import React, { useState } from "react"
 import axios from "axios";
import "./index.css"

export default function Weather(props) {
    const [city, setCity] = useState("");
    const [text, setText] = useState("");

    function showTemp(response) {
        let temp = Math.round(response.data.main.temp);
        let fahr = Math.round(temp * (9 / 5) + 32);

        setText(
            <div className="message">
                The temperature is {temp}°C ({fahr}°F) in {city}.
            </div>
        )
    }

    function handleSearch(event) {
        event.preventDefault();
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=deb4d0036edfa966c7a36750fd024ceb&units=metric`;
        axios.get(apiUrl).then(showTemp);
    }

    function updateSearch(event) {
        setCity(event.target.value)
    }

    return (
        <div className="searchbox">
            <form onSubmit={handleSearch}> 
                <input type="search" placeholder="Location" onChange={updateSearch} />
                <input type="submit" value="Search" /> {" "} 
            </form> {" "}
            <h4> {text} </h4>
        </div>
    )
}