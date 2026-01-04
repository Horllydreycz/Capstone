import { useState } from "react";
import { format, addDays } from "date-fns";
import { getWeatherIcon } from "../utils/weatherUtils";

function ForecastList({ data }) {
  const [activeTab, setActiveTab] = useState("Next 7days");
  const tabs = ["Today", "Tomorrow", "Next 7days"];

  if (!data) return null;

  const { daily } = data;

  const forecastDays = daily.time.slice(1, 7).map((time, index) => {
    const i = index + 1;
    return {
      date: new Date(time),
      tempMax: Math.round(daily.temperature_2m_max[i]),
      tempMin: Math.round(daily.temperature_2m_min[i]),
      weatherCode: daily.weather_code[i],
    };
  });

  return (
    <div className="flex flex-col h-full justify-center">
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 h-full">
        {forecastDays.map((day, idx) => {
          const Icon = getWeatherIcon(day.weatherCode);
          return (
            <div
              key={idx}
              className="bg-[#2C2C35] rounded-[40px] flex flex-col items-center justify-between min-h-[140px]"
            >
              <span className="text-lg font-medium text-gray-300 border-b border-b-gray-600 w-full text-center pt-3 pb-2">
                {format(day.date, "EEE")}
              </span>
              <Icon className="w-10 h-10 text-white" />
              <div className="text-center p-3">
                <span className="block text-3xl font-bold">{day.tempMax}°</span>
                <span className="block text-lg text-gray-500">
                  {day.tempMin}°
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ForecastList;
