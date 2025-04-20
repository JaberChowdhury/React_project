import React from "react";
import { Outlet } from "react-router";
import Footer from "~/components/doctor/Footer";
import Navbar from "~/components/doctor/Navbar";

const Doctorlayouts = () => {
  return (
    <div className="container mx-auto">
      {/* <h1>Doctorlayouts</h1> */}

      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Doctorlayouts;
