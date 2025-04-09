import { Card, CardContent, CardTitle } from './ui/card';

const Footer = () => {
  return (
    <Card className="w-screen rounded-none mt-7">
      <CardContent className="flex justify-center items-center p-14 flex-col gap-y-8">
        <CardTitle className="text-4xl cursor-pointer">
          <span className="text-blue-500">Auction</span>
          <span className="text-yellow-600 font-bold">Gallery</span>
        </CardTitle>
        <CardContent className="flex gap-x-4">
          <div>Bid.</div>
          <div>Win.</div>
          <div>OWN.</div>
        </CardContent>
        <CardContent className="text-center ">
          <div className="flex text-xl font-medium text-center gap-x-8">
            <a href="#">Home</a>
            <a href="#">Auction</a>
            <a href="#">Catagories</a>
            <a href="#">How to works</a>
          </div>
        </CardContent>
        <div>© 2025 AuctionHub. All rights reserved.</div>
      </CardContent>
    </Card>
  );
};

export default Footer;
