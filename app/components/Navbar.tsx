import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="w-full flex flex-col md:flex-row justify-between items-center mt-6 md:mt-10 px-4 md:px-0 container mx-auto text-lg md:text-2xl gap-4 md:gap-0">
      <div className="p-2 font-bold flex items-center gap-2 overflow-hidden">
        <span className="bg-slate-200 text-black px-3 py-1 rounded-md text-base md:text-xl">
          Text
        </span>
        <span className="bg-black text-white px-3 py-1 rounded-md text-base md:text-xl">
          Action
        </span>
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:gap-7 w-full md:w-auto">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "p-2 bg-black text-white rounded-md font-bold transition-colors"
              : "p-2 rounded-md font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "p-2 bg-black text-white rounded-md font-bold transition-colors"
              : "p-2 rounded-md font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          }
          to="/text-utils"
        >
          Text-utils
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "p-2 bg-black text-white rounded-md font-bold transition-colors"
              : "p-2 rounded-md font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          }
          to="/textanalyzer"
        >
          Text-analyzer
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
