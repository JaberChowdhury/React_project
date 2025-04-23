import React from "react";
import { Card, CardContent } from "../ui/card";
import { Navbar } from "./Navbar";
import { Separator } from "@radix-ui/react-separator";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Card className="shadow-none w-full py-28 flex justify-center items-center ">
      <CardContent className="flex justify-center items-center flex-col gap-y-8">
        <Navbar.Brand
          logoSrc="https://github.com/ProgrammingHero1/B11A08-router-warrior/blob/main/C001-assets/logo.png?raw=true"
          title="Phudu"
          imageProps={{
            loading: "lazy",
          }}
          titleProps={{
            className: "text-3xl font-bold",
          }}
        />
        <Navbar.Links
          className="flex justify-center items-center gap-x-4 text-xl"
          items={[
            { label: "Home", to: "/doctor" },
            { label: "My-booking", to: "/booking" },
            { label: "Blogs", to: "/blog" },
            { label: "Contact us", to: "/contact" },
          ]}
        />
        <Separator className="my-4 w-4xl border border-slate-300" />
      </CardContent>
      <CardContent className="w-full flex justify-center items-center gap-x-6 text-5xl *:cursor-pointer">
        <FaFacebook />
        <FaInstagram />
        <FaYoutube />
        <CiLinkedin />
        <FaTwitter />
      </CardContent>
    </Card>
  );
};

export default Footer;
