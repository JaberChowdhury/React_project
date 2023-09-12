import ColorStore from "../Hooks/ColorStore";
import { motion } from "framer-motion";

export default function Colors() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col relative">
      {ColorStore.map((color, index) => {
        return (
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            key={index}
            style={{
              backgroundColor: color.value,
            }}
            className="my-1 rounded shadow-md w-4/5 p-2 flex justify-center items-center "
          >
            {color.name}
          </motion.div>
        );
      })}
    </div>
  );
}
