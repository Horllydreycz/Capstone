import "./index.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-[#292929]">
      <div className="bg-black mx-4 sm:mx-20 md:mx-40 lg:mx-80 min-h-screen rounded-3xl">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
