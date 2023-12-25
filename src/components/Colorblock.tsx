import React from "react";
import { OpositeHexadecimalColor as ohc } from "../hooks";
import { motion } from "framer-motion";

interface propsType {
  color: string;
  id: number;
  size: {
    gridColumn?: string;
    gridRow?: string;
  };
}

const Colorblock = ({ color, size, id }: propsType) => {
  const box: React.CSSProperties = {
    width: "100%",
    height: "100%",
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    ...size,
    backgroundColor: color,
    color: ohc(color),
  };

  return (
    <motion.div style={box} className="rounded inner-shadow font-bold text-2xl">
      <div>{id}</div>
    </motion.div>
  );
};

export default Colorblock;
