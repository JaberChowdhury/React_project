import React from 'react';
import { Card, CardDescription } from './ui/card';
import Auctionlist from './Auctionlist';
import Favouritelist from './Favouritelist';

const Auction = () => {
  return (
    <div className="container mt-5">
      <Card className="bg-transparent border-none shadow-none">
        <div>
          <p className="text-3xl font-bold">Active Auction</p>
          <CardDescription>
            Discover and bid on extraordinary items
          </CardDescription>
        </div>
      </Card>
      <div className="w-full flex justify-start items-start">
        <Auctionlist />
        <Favouritelist />
      </div>
    </div>
  );
};

export default Auction;
