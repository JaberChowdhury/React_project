import TextUtilsWorker from "../Hooks/TextUtilsWorker";
import { motion } from "framer-motion";

interface propsType {
  state: { value: string };
}

export default function Overview(props: propsType) {
  const { state } = props;
  const worker = new TextUtilsWorker(state.value);
  const dataAsArray = worker.countCharacters();

  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col relative">
      <div>Overview</div>
      <div className="w-4/5 p-1 my-1 bg-slate-400 rounded shadow-md flex justify-between items-center px-2">
        <div>Character</div>
        <div>Count</div>
      </div>
      {dataAsArray.map((item, index) => {
        return (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{
              scaleX: 1,
              transition: {
                delay: 0.05 * index,
              },
            }}
            key={index}
            className="px-6 w-4/5 p-1 my-[1px] bg-slate-400 opacity-[0.8] rounded shadow-md flex justify-between items-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
                transition: {
                  delay: 0.09 * index,
                },
              }}
            >
              {item.char}
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
                transition: {
                  delay: 0.09 * index,
                },
              }}
            >
              {item.value}
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
