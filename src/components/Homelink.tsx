import { Link } from "react-router-dom";
import { screen } from "../hooks";
import { motion } from "framer-motion";

interface propsType {
  to: string;
  title: string;
  id: number;
}

const Homelink = ({ to, title, id }: propsType) => {
  const { width } = screen();
  return (
    <motion.div
      initial={{
        scale: 0,
      }}
      animate={{
        scale: 1,
        transition: {
          delay: id * 0.05,
        },
      }}
      style={{
        width: width / 2.5,
        height: width / 2.5,
      }}
      className="bg-indigo-300 border-2 border-b-indigo-500 border-l-indigo-500 text-indigo-700 active:scale-[1.05] hover:shadow-md rounded overflow-hidden relative"
    >
      <Link
        className="w-full h-full font-bold flex justify-center items-center text-3xl"
        to={to}
      >
        {title}
      </Link>
    </motion.div>
  );
};

export default Homelink;
