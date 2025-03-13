import { motion } from "framer-motion";

const App = () => {
  return (
    <div className="bg-[#ccaea1] w-full min-h-screen flex justify-center items-center">
      <div className="size-80 flex justify-center items-center border-2 rounded-full overflow-hidden m-2">
        <div className="m-2 p-2  bg-[#72412f] size-72 rounded-full  flex justify-center items-center overflow-hidden">
          <img className="w-80 " src="./bg.png" alt="" />
        </div>
        {Array.from({ length: 36 }).map((_, i) => {
          return (
            <motion.div
              key={i}
              initial={{
                width: "0%",
                transform: `rotate(-${i * 3}deg)`,
              }}
              animate={{
                width: "80%",
                transform: `rotate(${i * 10}deg)`,
                transition: {
                  duration: 1,
                },
              }}
              className="p-2 absolute flex justify-between items-center"
            >
              <motion.div
                initial={{
                  width: "0px",
                  backgroundColor: "#ccaea1",
                }}
                animate={{
                  width: "200px",
                  backgroundColor: "#241410",
                  transition: {
                    duration: 1,
                  },
                }}
                className="p-1 absolute rounded-full "
              ></motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
