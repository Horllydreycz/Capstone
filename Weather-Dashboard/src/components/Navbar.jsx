import { MapPin, LayoutDashboard, Bell, Search, Moon, Sun } from "lucide-react";

function Navbar({ location }) {
  return (
    <nav className="w-full py-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-4">
            <div className="bg-[#2C2C35] p-2 rounded-full cursor-pointer hover:bg-[#3c3c45] transition">
              <LayoutDashboard className="w-6 h-6 text-white" />
            </div>
            <div className="bg-[#2C2C35] p-2 rounded-full cursor-pointer hover:bg-[#3c3c45] transition">
              <Bell className="w-6 h-6 text-white" />
            </div>
          </div>

          <div className="flex items-center gap-2 text-white px-4 py-2">
            <MapPin className="w-5 h-5 text-blue-500" />
            <span className="font-medium">{location || "Select Location"}</span>
          </div>
        </div>

        <div className="flex-1 max-w-xl w-full">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-white transition" />
            <input
              type="text"
              placeholder="Search City"
              className="w-full bg-[#2C2C35] text-white pl-12 pr-4 py-3 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500/50 transition placeholder-gray-500"
            />
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="bg-[#2C2C35] p-1 rounded-full flex items-center border border-gray-700">
            <button className="p-2 rounded-full bg-transparent text-gray-400 hover:text-white transition">
              <Sun className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full bg-[#1E1E1E] text-white shadow-sm">
              <Moon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
