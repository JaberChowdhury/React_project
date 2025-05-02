import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center mt-10 container mx-auto text-2xl">
      <div className="p-2 font-bold flex overflow-hidden">
        <span className="bg-slate-200 text-black p-2 rounded">Text</span>{" "}
        <span className="bg-black text-white p-2 rounded">Action</span>
      </div>
      <div className="space-x-7">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "p-2 bg-black text-white rounded font-bold"
              : "p-2  rounded font-bold"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "p-2 bg-black text-white rounded font-bold"
              : "p-2  rounded font-bold"
          }
          to="/text-utils"
        >
          Text-utils
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "p-2 bg-black text-white rounded font-bold"
              : "p-2  rounded font-bold"
          }
          to="/textanalyzer"
        >
          Text-analyyzer
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
