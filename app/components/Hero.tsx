import React from "react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="bg-[#131313]/[0.1] w-full p-16 rounded-md flex justify-around items-center flex-wrap gap-y-4">
      <div className="h-full space-y-7">
        <p className="text-5xl">
          Books of freshen up <br /> your bookself
        </p>
        <Link to="/Listed-books">
          <button className="bg-green-400 p-2 rounded  px-5 cursor-pointer">
            View the list
          </button>
        </Link>
      </div>
      <div>
        <img
          width={400}
          src="https://github.com/ProgrammingHero1/boipoka-book-vibe/blob/main/src/assets/books.jpg?raw=true"
          alt="book"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Hero;
