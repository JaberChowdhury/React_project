import text from "@/constant/text";
import Article from "@/components/Article";
import Scrollindicator from "@/components/Scrollindicator";
import Img from "@/components/Img";
import React from "react";
import imageData from "@/constant/images";

export default function App() {
  const images = imageData();
  const serial = [2, 0, 4, 1, 3, 5, 2, 3];
  return (
    <div className="w-full min-h-screen flex items-center flex-col p-2">
      <Scrollindicator />
      {text.map((d, id) => (
        <React.Fragment key={id}>
          <Img src={images[serial[id]]} className="w-[97%] rounded" />
          <Article className="text-xl tracking-wide my-2">{d}</Article>
        </React.Fragment>
      ))}
    </div>
  );
}
