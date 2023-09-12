import { TextField } from "@mui/material";
import { Search as Se } from "@mui/icons-material";
import { motion } from "framer-motion";
import Div from "../components/Div";

export default function Search() {
  return (
    <motion.div
      initial={{
        top: "100vh",
        opacity: "0%",
      }}
      animate={{
        top: "0%",
        opacity: "100%",
      }}
      className="w-full min-h-screen flex justify-center items-center flex-col bg-slate-400 relative p-2"
    >
      <Div
        style={{
          borderRadius: "6px",
        }}
        className="flex justify-between items-center"
      >
        <TextField
          sx={{
            backgroundColor: "white",
            borderRadius: "6px",
          }}
          placeholder="Enter something"
          label="Search"
          onChange={(e) => console.log(e.target.value)}
        />
        <Se
          sx={{
            fontSize: 45,
            backgroundColor: "white",
            borderRadius: "50%",
          }}
        />
      </Div>
    </motion.div>
  );
}
