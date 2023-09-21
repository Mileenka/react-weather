import { useState, useEffect } from "react";

import axios from "axios";

import "./WeatherContainer.css";

import Loading from "./Loading";
import Weather from "./Weather";

const API_URL =
  "https://api.open-meteo.com/v1/forecast?latitude=50.8503&longitude=4.3517&hourly=temperature_2m";

const WeatherContainer = () => {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);

        if (response.status === 200) {
          setWeatherInfo(response.data);
          setError("");
        } else {
          throw new Error(`Failed to fetch weather data (${response.status})`);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="weather-container">
      {loading && <Loading />}
      {error && <p>{error}</p>}
      {weatherInfo && <Weather weather={weatherInfo} />}
    </div>
  );
};

export default WeatherContainer;
