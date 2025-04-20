import React from "react";
import { Outlet } from "react-router";

const lawyerlayouts = () => {
  return (
    <div>
      <h1>lawyerlayouts</h1>
      <Outlet />
    </div>
  );
};

export default lawyerlayouts;
