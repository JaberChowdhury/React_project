import { Counter as CounterComponent } from "../components/Counter";
import { motion } from "framer-motion";

export default function Counter() {
  return (
    <div className="w-full gap-2 min-h-screen flex justify-center items-center flex-col relative p-2">
      {[..."12345"]?.map((value, index) => (
        <motion.div
          className="w-full flex justify-center items-center"
          key={index + value}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{
            opacity: 1,
            scaleX: 1,
            transition: { delay: 0.09 * index },
          }}
        >
          <CounterComponent />
        </motion.div>
      ))}
    </div>
  );
}
