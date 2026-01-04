import { getWeatherIcon, getWeatherDescription } from "../utils/weatherUtils";

function OtherCities({ cities }) {
  return (
    <div className="space-y-4">
      <div className="space-y-4">
        {cities.map((cityData, index) => {
          if (!cityData || !cityData.current) return null;

          const { current, name, country } = cityData;
          const Icon = getWeatherIcon(current.weather_code, current.is_day);
          const description = getWeatherDescription(current.weather_code);

          return (
            <div
              key={index}
              className="bg-[#2C2C35] rounded-[30px] p-4 flex items-center justify-between"
            >
              <div className="flex flex-col">
                <span className="text-xs text-gray-400">{country}</span>
                <span className="text-lg font-bold">{name}</span>
                <span className="text-xs text-gray-400">{description}</span>
              </div>

              <div className="flex flex-col items-center">
                <Icon className="w-8 h-8 text-white mb-1" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OtherCities;
