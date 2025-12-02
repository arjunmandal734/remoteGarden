import { NavLink } from "react-router-dom";

export default function TopNavbar() {
  return (
    <nav className="hidden md:flex items-center px-8 py-4 bg-white shadow-md fixed top-0 left-0 right-0 z-10">
      {/* Left: Logo + App Name */}
      <div className="flex items-center space-x-2">
        <img
          src="../../../plantInages/logoforlogo.png"
          alt="PlantApp Logo"
          className="h-8 w-8 object-contain"
        />
        <span className="text-2xl font-bold text-green-600">GreenScope</span>
      </div>

      {/* Center: Navigation Links */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-12">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `relative text-green-700 font-semibold tracking-wide transition duration-300
            hover:text-green-800 after:content-[''] after:absolute after:bottom-0 after:h-[2px] after:bg-green-700 after:transition-all after:duration-300
            ${
              isActive
                ? "after:w-full after:left-0 text-green-800"
                : "after:w-0 after:left-1/2 hover:after:w-full hover:after:left-0"
            }`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/garden"
          className={({ isActive }) =>
            `relative text-green-700 font-semibold tracking-wide transition duration-300
            hover:text-green-800 after:content-[''] after:absolute after:bottom-0 after:h-[2px] after:bg-green-700 after:transition-all after:duration-300
            ${
              isActive
                ? "after:w-full after:left-0 text-green-800"
                : "after:w-0 after:left-1/2 hover:after:w-full hover:after:left-0"
            }`
          }
        >
          My Garden
        </NavLink>

        <NavLink
          to="/pricing"
          className={({ isActive }) =>
            `relative text-green-700 font-semibold tracking-wide transition duration-300
            hover:text-green-800 after:content-[''] after:absolute after:bottom-0 after:h-[2px] after:bg-green-700 after:transition-all after:duration-300
            ${
              isActive
                ? "after:w-full after:left-0 text-green-800"
                : "after:w-0 after:left-1/2 hover:after:w-full hover:after:left-0"
            }`
          }
        >
          Pricing
        </NavLink>

        <NavLink
          to="/plantstore"
          className={({ isActive }) =>
            `relative text-green-700 font-semibold tracking-wide transition duration-300
            hover:text-green-800 after:content-[''] after:absolute after:bottom-0 after:h-[2px] after:bg-green-700 after:transition-all after:duration-300
            ${
              isActive
                ? "after:w-full after:left-0 text-green-800"
                : "after:w-0 after:left-1/2 hover:after:w-full hover:after:left-0"
            }`
          }
        >
          Plant Store
        </NavLink>
      </div>

      {/* Right: Profile + Logout */}
      <div className="ml-auto flex items-center space-x-4">
        <img
          src="../../../plantInages/profile.png" // Replace with actual profile image path
          alt="User Profile"
          className="h-8 w-8 rounded-full object-cover cursor-pointer"
        />
        <button className="bg-red-500 text-white text-sm px-3 py-1 rounded hover:bg-red-600 transition cursor-pointer">
          Logout
        </button>
      </div>
    </nav>
  );
}
