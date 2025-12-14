import {
  Map,
  MapPin,
  LayoutDashboard,
  Bell,
  Search,
  Moon,
  User,
} from "lucide-react";

function YourComponent() {
  return (
    <div>
      <Map />
    </div>
  );
}
function Navbar() {
  return (
    <nav className=" w-full bg-transparent ">
      <div className="flex items-center justify-between px-4 h-14">
        <div className="flex items-center gap-3 text-[#FEFEFE]">
          <LayoutDashboard className="w-5 h-5 cursor-pointer" />
          <Bell className="w-5" h-5 />
          <div className="flex items-center gap-1 text-sm">
            <MapPin className="w-5 h-4" />
            <span>Lagos, Nigeria</span>
          </div>
        </div>
        <div className="hidden md:flex items-center bg-[#1E1E1E] px-3 py-1 rounded-full w-72">
          <Search className="w-h h-4 text-[#FEFEFE]" />
          <input
            type="text"
            placeholder="Search City"
            className="bg-transparent outline-none text-sm px-2 text-white/80 w-full"
          />
        </div>
        <div className="flex items-center gap-4">
          <User className="w-5 h-5 cursor-pointer text-white/80" />
          <div className="w-15 h-5 flex items-center justify-center rounded-full bg-[#1F1F1F] cursor-pointer ">
            <Moon className="w-5 h-9 cursor-pointer text-white/80 hover:text-white" />
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
