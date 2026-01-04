import { BarChart, Bar, ResponsiveContainer, Cell } from "recharts";
import { Droplets, Eye, EyeOff } from "lucide-react";

function TodaysOverview({ data }) {
  if (!data) return null;
  const { current, hourly } = data;

  const currentHour = new Date().getHours();
  const uvIndex = hourly.uv_index[currentHour] || 0;
  const visibility = hourly.visibility ? hourly.visibility[currentHour] : 10000;

  const getVisibilityInfo = (vis) => {
    if (vis >= 10000)
      return { text: "It's perfectly clear right now", Icon: Eye };
    if (vis >= 5000) return { text: "Good visibility", Icon: Eye };
    if (vis >= 2000) return { text: "Haze is affecting visibility", Icon: Eye };
    return { text: "Poor visibility", Icon: EyeOff };
  };

  const { text: visibilityText, Icon: VisibilityIcon } =
    getVisibilityInfo(visibility);

  const now = new Date();
  const currentHourIndex = hourly.time.findIndex((t) => {
    const d = new Date(t);
    return d.getHours() === now.getHours() && d.getDate() === now.getDate();
  });

  const startIndex = currentHourIndex !== -1 ? currentHourIndex : 0;

  const windData = hourly.wind_speed_10m
    ? hourly.wind_speed_10m
        .slice(startIndex, startIndex + 12)
        .map((speed) => ({ value: speed }))
    : Array.from({ length: 12 }, () => ({ value: current.wind_speed_10m }));

  return (
    <div className="grid grid-cols-2 gap-4 h-full">
      <div className="bg-[#2C2C35] rounded-[30px] p-4 flex flex-col justify-between min-h-40">
        <span className="text-gray-400 text-sm">Wind Status</span>
        <div className="h-16 w-full my-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={windData}>
              <Bar dataKey="value" radius={[2, 2, 0, 0]}>
                {windData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={index % 2 === 0 ? "#3B82F6" : "#60A5FA"}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-between items-end">
          <span className="text-2xl font-bold">
            {current.wind_speed_10m}{" "}
            <span className="text-sm font-normal text-gray-400">km/h</span>
          </span>
          <span className="text-xs text-gray-400">
            {formatTime(new Date())}
          </span>
        </div>
      </div>

      <div className="bg-[#2C2C35] rounded-[30px] p-4 flex flex-col justify-between min-h-40">
        <span className="text-gray-400 text-sm">UV Index</span>
        <div className="flex justify-center items-center h-full relative">
          <div className="w-24 h-12 overflow-hidden relative">
            <div className="w-24 h-24 rounded-full border-8 border-[#444] absolute top-0 left-0"></div>
            <div
              className="w-24 h-24 rounded-full border-8 border-blue-500 absolute top-0 left-0"
              style={{
                clipPath: "polygon(0 50%, 100% 50%, 100% 0, 0 0)",
                transform: `rotate(${uvIndex * 18}deg)`,
              }}
            ></div>
          </div>
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 mt-2 text-xl font-bold">
            {uvIndex}{" "}
            <span className="text-sm font-normal text-gray-400">UV</span>
          </span>
        </div>
      </div>

      <div className="bg-[#2C2C35] rounded-[30px] p-4 flex flex-col justify-between min-h-40">
        <span className="text-gray-400 text-sm">Humidity</span>
        <div className="flex-1 flex items-center justify-center">
          <Droplets className="w-10 h-10 text-blue-400" />
        </div>
        <div>
          <span className="text-2xl font-bold">
            {current.relative_humidity_2m}
            <span className="text-sm">%</span>
          </span>
          <p className="text-xs text-gray-400 mt-1">
            The dew point is{" "}
            {Math.round(
              current.temperature_2m - (100 - current.relative_humidity_2m) / 5
            )}
            ° right now
          </p>
        </div>
      </div>

      <div className="bg-[#2C2C35] rounded-[30px] p-4 flex flex-col justify-between min-h-40">
        <span className="text-gray-400 text-sm">Visibility</span>
        <div className="flex-1 flex items-center justify-center">
          <VisibilityIcon className="w-10 h-10 text-blue-400" />
        </div>
        <div>
          <span className="text-2xl font-bold">
            {visibility / 1000}{" "}
            <span className="text-sm font-normal text-gray-400">km</span>
          </span>
          <p className="text-xs text-gray-400 mt-1">{visibilityText}</p>
        </div>
      </div>
    </div>
  );
}

function formatTime(date) {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export default TodaysOverview;
