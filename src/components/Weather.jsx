import { useState, React } from "react"
import WeatherInfo from "./WeatherInfo"
import WeatherButton from "./WeatherButton"
import WeatherForm from "./WeatherForm"
import InputError from "./InputError"

export default function Weather() {
    const [inputError, setInputError] = useState(false);
    const [gotWeather, setGotWeather] = useState(false);
    const [cityValue, setCityValue] = useState("");
    const [weatherValue, setWeatherValue] = useState([]);

    const WEATHER_API_KEY = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY
    const WEATHER_API_URI = `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&days=6&q=`;

    const fetchWeatherData = async (cityValue) => {
        if (cityValue !== "") {
            try {
                const response = await fetch(WEATHER_API_URI + cityValue);
                if (!response.ok) {
                    setGotWeather(false);
                    setInputError(true);
                    throw new Error("Response was not okay");
                }
                const data = await response.json();
                setWeatherValue([data.current, data.forecast, data.location]);
                setGotWeather(true);
                setInputError(false);
            } catch (error) {
                setGotWeather(false);
                setInputError(true);
                console.error("Something went wrong: " + error);
            }
        } else {
            setGotWeather(false);
            setInputError(true);
        }
    }

    const handleEnter = (e) => {
        if (e.key === "Enter") {
            fetchWeatherData(cityValue);
        }
    }

    const handleChange = (e) => {
        setCityValue(e.target.value);
    }

    const handleClick = (e) => {
        fetchWeatherData(cityValue);
    }

    return (
        <div className="weather-wrapper">
            <div className="form-wrapper">
                <WeatherForm handleChange={handleChange} handleEnter={handleEnter} />
                <WeatherButton handleClick={handleClick} />
            </div>
            {inputError && <InputError />}
            {gotWeather && <WeatherInfo
                current={weatherValue[0]}
                forecast={weatherValue[1]}
                location={weatherValue[2]}
            />}
        </div>
    )
}
