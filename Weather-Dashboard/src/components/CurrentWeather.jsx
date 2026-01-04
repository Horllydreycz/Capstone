import { format } from "date-fns";
import { getWeatherIcon, getWeatherDescription } from "../utils/weatherUtils";
import {
  Wind,
  Droplets,
  Gauge,
  Sunrise,
  Sunset,
  Thermometer,
} from "lucide-react";

function CurrentWeather({ data }) {
  if (!data) return null;

  const current = data.current;
  const daily = data.daily;
  const WeatherIcon = getWeatherIcon(current.weather_code, current.is_day);
  const description = getWeatherDescription(current.weather_code);

  return (
    <div className="bg-[#BBD7EC] rounded-[30px] p-5 text-[#0F0F11] h-full flex flex-col justify-between relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[23%] bg-black/5 z-0"></div>

      <div className="flex justify-between items-center pb-2 z-10">
        <span className="text-md font-medium">
          {format(new Date(), "EEEE")}
        </span>
        <span className="text-md font-medium">
          {format(new Date(), "h:mm a")}
        </span>
      </div>

      <div className="flex justify-between items-center z-10 my-2">
        <div>
          <h1 className="text-5xl font-bold">
            {Math.round(current.temperature_2m)}°
          </h1>
          <p className="text-gray-800 text-sm mt-1 capitalize font-light">
            {description}
          </p>
        </div>
        <WeatherIcon className="w-16 h-16 text-yellow-500" />
      </div>

      <div className="grid grid-cols-2 gap-x-6 text-xs z-10">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 flex items-center gap-1">
              <Thermometer size={14} /> Real Feel
            </span>
            <span className="font-semibold">
              {Math.round(current.apparent_temperature)}°
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-400 flex items-center gap-1">
              <Wind size={14} /> Wind N-E
            </span>
            <span className="font-semibold">{current.wind_speed_10m} km/h</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-400 flex items-center gap-1">
              <Gauge size={14} /> Pressure
            </span>
            <span className="font-semibold">{current.pressure_msl}MB</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-400 flex items-center gap-1">
              <Droplets size={14} /> Humidity
            </span>
            <span className="font-semibold">
              {current.relative_humidity_2m}%
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 flex items-center gap-1">
              <Sunrise size={14} /> Sunrise
            </span>
            <span className="font-semibold">
              {format(new Date(daily.sunrise[0]), "h:mm a")}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-400 flex items-center gap-1">
              <Sunset size={14} /> Sunset
            </span>
            <span className="font-semibold">
              {format(new Date(daily.sunset[0]), "h:mm a")}
            </span>
          </div>
        </div>
      </div>

      <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-blue-500/10 to-transparent"></div>
    </div>
  );
}

export default CurrentWeather;
