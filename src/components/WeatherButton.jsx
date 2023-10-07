import React from "react"

export default function WeatherButton({ handleClick }) {

    return (
        <button type="submit" onClick={handleClick} className="weather-button">Get weather</button>
    )
}
