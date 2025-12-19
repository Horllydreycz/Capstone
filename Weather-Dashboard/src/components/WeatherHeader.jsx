import { useState } from "react";

function WeatherHeader() {
  const [activeTab, setActiveTab] = useState("Next 7days");
  const [mode, setMode] = useState("Forecast");
  const tabs = ["Today", "Tomorrow", "Next 7days"];

  return (
    <div className="w-full text-white">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex gap-8 text-sm">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-1 transition ${
                activeTab === tab
                  ? "text-white font-medium"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white"></span>
              )}
            </button>
          ))}
        </div>
        <div className="flex bg-[#1a1a22] rounded-full p-1 text-">
          {["Forecast", "Air Quality"].map((item) => (
            <button
              key={item}
              onClick={() => setMode(item)}
              className={`px-4 py-1.5 rounded-full transition ${
                mode === item
                  ? "bg-[#2a2a35] text-white"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <h2 className="px-6 mt-2 text-lg text-white font-bold">
          Chance of Rain
        </h2>
      </div>
    </div>
  );
}

export default WeatherHeader;
