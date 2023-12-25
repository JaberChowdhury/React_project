import { motion } from "framer-motion";
import { Homelink } from "../components";

const Home = () => {
  return (
    <div className="w-full overflow-hidden bg-indigo-200 min-h-screen p-2 flex items-center flex-col relative">
      <motion.header
        initial={{
          x: "-100%",
          opacity: 0,
        }}
        animate={{
          x: "0%",
          opacity: 1,
        }}
        className="w-4/5 overflow-y-scroll overflow-hidden mt-10 p-2 text-center font-bold text-2xl rounded "
      >
        Color Ocean
      </motion.header>

      <div className="w-full flex mt-10 justify-center items-center flex-wrap gap-2 relative ">
        <Homelink id={1} to="/colors" title="Colors" />
        <Homelink id={2} to="/colors" title="Colors" />
        <Homelink id={3} to="/colors" title="Colors" />
        <Homelink id={4} to="/colors" title="Colors" />
        <Homelink id={5} to="/colors" title="Colors" />
      </div>
    </div>
  );
};

export default Home;
