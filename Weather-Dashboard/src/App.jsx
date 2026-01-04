import "./index.css";
import Navbar from "./components/Navbar";
import WeatherHeader from "./components/WeatherHeader";
import WeatherForcast from "./components/WeatherForcast";
import DailyOverview from "./components/DailyOverview";

function App() {
  return (
    <div className="min-h-screen bg-[#292929]">
      <div className="bg-black mx-4 sm:mx-4 md:mx-8 lg:mx-20 xl:mx-40 2xl:mx-80 min-h-screen sm:rounded-3xl">
        <div className="px-4 sm:px-6 md:px-8 lg:px-10 ">
          <Navbar />
          <WeatherHeader />
          <WeatherForcast />
          <DailyOverview />
          <ForecastList />
        </div>
      </div>
    </div>
  );
}

export default App;
