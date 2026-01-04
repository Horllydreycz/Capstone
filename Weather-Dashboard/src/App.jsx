import { useEffect, useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import CurrentWeather from "./components/CurrentWeather";
import ForecastList from "./components/ForecastList";
import RainChart from "./components/RainChart";
import TodaysOverview from "./components/TodaysOverview";
import GlobalMap from "./components/GlobalMap";
import OtherCities from "./components/OtherCities";
import {
  fetchWeatherData,
  fetchCitiesWeather,
  DEFAULT_CITIES,
  fetchReverseGeocoding,
} from "./services/weatherService";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [otherCitiesData, setOtherCitiesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [location, setLocation] = useState({
    lat: 6.5244,
    lon: 3.3792,
    name: "Lagos, Nigeria",
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const locationData = await fetchReverseGeocoding(
              latitude,
              longitude
            );
            const name =
              locationData.city || locationData.locality || "My Location";
            const country = locationData.countryName || "";
            setLocation({
              lat: latitude,
              lon: longitude,
              name: country ? `${name}, ${country}` : name,
            });
          } catch (e) {
            setLocation({ lat: latitude, lon: longitude, name: "My Location" });
          }
        },
        (error) => {
          console.log("Geolocation permission denied or error:", error);
        }
      );
    }
  }, []);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const [current, cities] = await Promise.all([
          fetchWeatherData(location.lat, location.lon),
          fetchCitiesWeather(DEFAULT_CITIES),
        ]);
        setWeatherData(current);
        setOtherCitiesData(
          cities.map((data, index) => ({ ...data, ...DEFAULT_CITIES[index] }))
        );
      } catch (err) {
        setError("Failed to load weather data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [location]);

  if (loading)
    return (
      <div className="min-h-screen bg-[#1E1E1E] flex items-center justify-center text-white">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="min-h-screen bg-[#1E1E1E] flex items-center justify-center text-red-500">
        {error}
      </div>
    );

  return (
    <div className="min-h-screen bg-[#1E1E1E] p-4 md:p-8 font-montserrat text-white">
      <div className="max-w-[1600px] mx-auto space-y-8">
        <Navbar location={location.name} />

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 xl:grid-cols-[350px_1fr_350px] gap-6 items-center">
            <div className="flex items-center gap-6 text-lg font-medium">
              <button className="text-white">Today</button>
              <button className="text-gray-500 hover:text-gray-300">
                Tomorrow
              </button>
              <button className="text-gray-500 hover:text-gray-300">
                Next 7 days
              </button>
            </div>
            <div className="flex justify-end xl:justify-end">
              <div className="bg-[#2C2C35] rounded-full p-1 text-xs flex">
                <button className="px-4 py-1.5 rounded-full bg-[#1E1E1E] text-white shadow-sm">
                  Forecast
                </button>
                <button className="px-4 py-1.5 rounded-full text-gray-400 hover:text-white">
                  Air Quality
                </button>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold">Chance Of Rain</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-[350px_1fr_350px] gap-6">
            <div className="h-60">
              <CurrentWeather data={weatherData} />
            </div>
            <div className="h-60">
              <ForecastList data={weatherData} />
            </div>
            <div className="h-60">
              <RainChart data={weatherData} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold">Today's Overview</h3>
            <div className="hidden xl:block w-[350px]">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">Other Cities</h3>
                <button className="text-sm text-gray-400 hover:text-white">
                  See All
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_1fr_350px] gap-6">
            <TodaysOverview data={weatherData} />
            <div className="h-full min-h-[380px]">
              <GlobalMap />
            </div>
            <div className="h-full">
              <div className="xl:hidden flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">Other Cities</h3>
                <button className="text-sm text-gray-400 hover:text-white">
                  See All
                </button>
              </div>
              <OtherCities cities={otherCitiesData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
