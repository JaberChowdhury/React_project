import React from "react";
import Books from "~/components/Books";
import Hero from "~/components/Hero";
// import Navbar from "~/components/Navbar";

const home = () => {
  return (
    <div className="space-y-5">
      {/* <Navbar /> */}
      <Hero />
      <Books />
    </div>
  );
};

export default home;
