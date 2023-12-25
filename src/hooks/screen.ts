import { useState, useEffect } from "react";

const screen = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const getSize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    getSize();
    return () => getSize();
  }, []);

  return { width, height };
};

export default screen;
