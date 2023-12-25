import text from "@/constant/text";
import Article from "@/components/Article";
import Img from "@/components/Img";
import React from "react";
import imageData from "@/constant/images";

export default function App() {
  const images = imageData();
  const serial = [2, 0, 4, 1, 3, 5, 2, 3];
  return (
    <div className="w-full min-h-screen flex items-center flex-col p-2">
      {text.map((d, id) => (
        <React.Fragment key={id}>
          <Img src={images[serial[id]]} className="w-[97%] rounded fade-up" />
          <Article className="text-xl tracking-wide my-2 first-letter:mx-2  first-letter:text-4xl first-letter:font-bold">
            {d}
          </Article>
        </React.Fragment>
      ))}
    </div>
  );
}
