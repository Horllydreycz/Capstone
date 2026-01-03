import "./index.css";
import Navbar from "./components/Navbar";
import WeatherHeader from "./components/WeatherHeader";
import WeatherForcast from "./components/WeatherForcast";
import DailyOverview from "./DailyOverview";

function App() {
  return (
    <div className="min-h-screen bg-[#292929]">
      <div className="bg-black mx-4 sm:mx-20 md:mx-40 lg:mx-80 min-h-screen rounded-3xl">
        <Navbar />
        <WeatherHeader />
        <WeatherForcast />
        <DailyOverview />
      </div>
    </div>
  );
}

export default App;
