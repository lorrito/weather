import React from "react"
import FutureWeather from "./FutureWeather";
import CurrentWeather from "./CurrentWeather";

export default function WeatherInfo({ current, forecast, location }) {

    return (
        <div className="info-wrapper">
            <CurrentWeather current={current} location={location} />
            <FutureWeather forecast={forecast} />
        </div>
    )
}
