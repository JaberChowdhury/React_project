import React from "react";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <Card className="w-full shadow-none flex justify-center items-center flex-col">
      <CardContent className="py-18">
        <CardHeader className="text-center text-5xl font-bold shadow-none">
          Dependable Care, Backed by Trusted <br /> Professionals.
        </CardHeader>
        <CardDescription className="text-center w-4xl m-auto">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </CardDescription>
      </CardContent>
      <CardContent className="flex justify-center items-center container max-w-3xl mx-auto gap-x-3">
        <Input className="rounded-full border-2 border-slate-600 " />
        <Button className="rounded-full bg-blue-500 ">Search now</Button>
      </CardContent>
      <CardContent className="grid grid-cols-2 gap-x-6 mt-5">
        <img
          src="https://github.com/ProgrammingHero1/B11A08-router-warrior/blob/main/C001-assets/banner-img-1.png?raw=true"
          alt="banner"
          loading="lazy"
        />
        <img
          src="https://github.com/ProgrammingHero1/B11A08-router-warrior/blob/main/C001-assets/banner-img-1.png?raw=true"
          alt="banner"
          loading="lazy"
        />
      </CardContent>
    </Card>
  );
};

export default Hero;
