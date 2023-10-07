import React from "react"

export default function WeatherForm({ handleChange, handleEnter }) {
    return (
        <input
            placeholder="Place name"
            onKeyDown={handleEnter}
            onChange={handleChange}
            type="text"
            className="weather-form"
        />
    )
}
