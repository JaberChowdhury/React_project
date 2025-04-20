import React from "react";
import { Outlet } from "react-router";

const Mainlayouts = () => {
  return (
    <div>
      {/* <h1>Mainlayouts</h1> */}
      <Outlet />
    </div>
  );
};

export default Mainlayouts;
