import React, { lazy } from "react";
import { Outlet } from "react-router";
import Footer from "~/components/doctor/Footer";
import { Navbar } from "@/components/doctor/Navbar";

const Doctorlayouts = () => {
  return (
    <div>
      <Navbar className="container mx-auto my-6 flex justify-between items-center">
        <Navbar.Brand
          logoSrc="https://github.com/ProgrammingHero1/B11A08-router-warrior/blob/main/C001-assets/logo.png?raw=true"
          title="MyApp"
          imageProps={{
            loading: "lazy",
          }}
        />
        <Navbar.Links
          items={[
            { label: "Home", to: "/doctor" },
            { label: "My-booking", to: "/booking" },
            { label: "Blogs", to: "/blog" },
            { label: "Contact us", to: "/contact" },
          ]}
        />
        <Navbar.Button
          className="bg-blue-600 rounded-full text-md  p-6 "
          onClick={() => alert("Emergency!")}
        >
          Emergency
        </Navbar.Button>
      </Navbar>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Doctorlayouts;
