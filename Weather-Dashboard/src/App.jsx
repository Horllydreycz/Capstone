import "./index.css";
import Navbar from "./components/Navbar";
import WeatherHeader from "./components/WeatherHeader";

function App() {
  return (
    <div className="min-h-screen bg-[#292929]">
      <div className="bg-black mx-4 sm:mx-20 md:mx-40 lg:mx-80 min-h-screen rounded-3xl">
        <Navbar />
        <WeatherHeader />
      </div>
    </div>
  );
}

export default App;
