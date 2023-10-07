import React from 'react'

export default function FutureWeather({ forecast }) {
    return (
        <div className="future-weather">
            {forecast.forecastday.slice(1).map((day) => (
                <div key={day.date}>
                    <p className="future-day">{day.date}</p>
                    <div className="minmax">
                        <p className="min">Min: {day.day.mintemp_c}°C | {day.day.mintemp_f}°F</p>
                        <p className="max">Max: {day.day.maxtemp_c}°C | {day.day.maxtemp_f}°F</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
