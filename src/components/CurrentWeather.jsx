import React from 'react'

export default function CurrentWeather({ current, location }) {
    return (
        <div className="current-weather">
            <p className="place">{location.name}, {location.country}</p>
            <p className="current-temperature">
                {current.temp_c}°C
                {" | "}
                {current.temp_f}°F
            </p>
            <div className="current-status">
                <p>Wind: {current.wind_kph}km/h</p>
                <p>Precipitation: {current.precip_mm}mm</p>
                <p>Humidity: {current.humidity}%</p>
            </div>
        </div>
    )
}
