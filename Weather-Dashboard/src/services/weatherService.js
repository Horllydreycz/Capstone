import axios from "axios";

const BASE_URL = "https://api.open-meteo.com/v1/forecast";

export const fetchWeatherData = async (lat, lon) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        latitude: lat,
        longitude: lon,
        current:
          "temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,pressure_msl,wind_speed_10m,wind_direction_10m",
        hourly:
          "temperature_2m,precipitation_probability,weather_code,uv_index,visibility,wind_speed_10m",
        daily:
          "weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max",
        timezone: "auto",
        forecast_days: 8,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

export const fetchCitiesWeather = async (cities) => {
  const promises = cities.map((city) => fetchWeatherData(city.lat, city.lon));
  return Promise.all(promises);
};

export const fetchReverseGeocoding = async (lat, lon) => {
  try {
    const response = await axios.get(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching reverse geocoding data:", error);
    return { city: "Unknown Location", countryName: "" };
  }
};

export const DEFAULT_CITIES = [
  { name: "Beijing", country: "China", lat: 39.9042, lon: 116.4074 },
  { name: "California", country: "US", lat: 36.7783, lon: -119.4179 },
  { name: "Dubai", country: "Arab Emirates", lat: 25.2048, lon: 55.2708 },
  { name: "Charlottetown", country: "Canada", lat: 46.2388, lon: -63.1292 },
];
