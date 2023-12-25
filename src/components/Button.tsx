import React from "react";
import { motion } from "framer-motion";

interface propsType {
  children?: React.ReactNode;
  className?: string;
  handleClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
}

export default function Button({
  children,
  className,
  handleClick,
  type,
}: propsType) {
  return (
    <motion.button
      type={type || "button"}
      onClick={handleClick}
      className={`px-2 p-1 shadow-md active:shadow-none rounded ${className}`}
    >
      {children}
    </motion.button>
  );
}
