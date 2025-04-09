import React from 'react';
import { Card, CardContent, CardDescription, CardTitle } from './ui/card';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <div className="w-full relative flex justify-center items-center bg-[url(https://raw.githubusercontent.com/ProgrammingHero1/B11A7-Simple-React-Assignment/refs/heads/main/assets/Banner-min.jpg)] bg-cover h-screen w-screen w-scrw-screen">
      {/* <img
        className="absolute"
        height="200px"
        width="100%"
        src="https://raw.githubusercontent.com/ProgrammingHero1/B11A7-Simple-React-Assignment/refs/heads/main/assets/Banner-min.jpg"
        alt="banner"
        loading="lazy"
      /> */}
      <Card className="w-4/5 border-none relative bg-transparent text-white">
        <CardContent className="flex flex-col items-start gap-y-4">
          <CardTitle className="text-6xl">
            Bid on Unique Items from <br /> Around the World
          </CardTitle>
          <CardDescription className="text-slate-400">
            Discover rare collectibles, luxury goods, and vintage <br />
            treasures in our curated auctions
          </CardDescription>
          <Button variant="secondary" className="rounded-full">
            Explore Auction
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Hero;
