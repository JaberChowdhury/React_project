import { motion } from "framer-motion";
import { CookieOutlined } from "@mui/icons-material";

interface propsType {
  label: string;
  handleInitialValue: (arg0: string) => void;
}

export default function Item({ label, handleInitialValue }: propsType) {
  const pVariants = { initial: { scale: 0 }, animate: { scale: 1 } };

  const handleClick = () => {
    handleInitialValue(label);
  };

  return (
    <motion.p
      variants={pVariants}
      initial="initial"
      whileInView="animate"
      onClick={handleClick}
      className="w-full bg-slate-200 hover:shadow-md active:scale-[0.8] my-1 p-1 px-2 rounded relative"
    >
      <CookieOutlined
        sx={{
          paddingLeft: "4px",
          paddingRight: "4px",
        }}
      />
      {label}
    </motion.p>
  );
}
