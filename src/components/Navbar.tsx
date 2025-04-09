import { Card, CardContent, CardTitle } from './ui/card';
import { IoNotifications } from 'react-icons/io5';

const Navbar = () => {
  return (
    <Card className="rounded-none w-full">
      <CardContent className="w-full flex justify-between items-center relative">
        <CardTitle className="text-2xl cursor-pointer">
          <span className="text-blue-500">Auction</span>
          <span className="text-yellow-600 font-bold">Gallery</span>
        </CardTitle>
        <div className="flex gap-x-7 text-xl font-medium">
          <a href="#">Home</a>
          <a href="#">Auction</a>
          <a href="#">Catagories</a>
          <a href="#">How to works</a>
        </div>
        <div className="flex justify-center items-center gap-x-4">
          <IoNotifications className="text-4xl bg-slate-300 rounded-full p-1 " />
          <img
            width={40}
            className="rounded-full p-1 border"
            loading="lazy"
            src="https://static.vecteezy.com/system/resources/previews/036/594/092/large_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg"
            alt="profile image"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default Navbar;
