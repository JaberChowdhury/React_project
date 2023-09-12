import { motion } from "framer-motion";
import React from "react";

interface propsType {
  handleClick?: () => void;
  children: React.ReactNode;
}

export default function Button({ handleClick, children }: propsType) {
  const buttonVariants = { initial: { scale: 0 }, animate: { scale: 1 } };

  return (
    <motion.button
      variants={buttonVariants}
      initial="initial"
      whileInView="animate"
      type="button"
      onBlur={handleClick}
      onClick={handleClick}
    >
      {children}
    </motion.button>
  );
}
