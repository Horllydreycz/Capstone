import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { format } from "date-fns";

function RainChart({ data }) {
  if (!data) return null;

  const { hourly } = data;

  const currentHour = new Date().getHours();

  const now = new Date();
  const currentHourIndex = hourly.time.findIndex(
    (t) =>
      new Date(t).getHours() === now.getHours() &&
      new Date(t).getDate() === now.getDate()
  );

  const startIndex = currentHourIndex !== -1 ? currentHourIndex : 0;
  const chartData = hourly.time
    .slice(startIndex, startIndex + 6)
    .map((time, i) => ({
      time: format(new Date(time), "h a"),
      chance: hourly.precipitation_probability[startIndex + i],
    }));

  return (
    <div className="bg-[#2C2C35] rounded-[30px] p-6 h-full flex flex-col">
      <div className="flex-1 w-full min-h-[150px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorRain" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              vertical={false}
              horizontal={true}
              stroke="#333"
              strokeDasharray="3 3"
            />
            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 12 }}
              dy={10}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1E1E1E",
                border: "none",
                borderRadius: "8px",
              }}
              itemStyle={{ color: "#fff" }}
            />
            <Area
              type="monotone"
              dataKey="chance"
              stroke="#3B82F6"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorRain)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default RainChart;
