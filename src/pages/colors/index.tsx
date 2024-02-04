import Glassbox from "@/components/Glassbox";
import Colorblock from "@/components/Colorblock";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { colorsSelector } from "@/features/colors/colorsSlice";
import { motion } from "framer-motion";

const Colors = () => {
  const { colors } = useSelector(colorsSelector);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          //justifyContent : "center",
          alignItems: "center",
          position: "relative",
          flexDirection: "column",
        }}
      >
        <Glassbox style={{ width: "300px" }}>
          <Typography sx={{ fontWeight: "bold" }} variant="h2">
            Colors
          </Typography>
        </Glassbox>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            flexWrap: "wrap",
          }}
        >
          {colors.map((data) => {
            return <Colorblock data={data} />;
          })}
        </Box>
      </Box>
    </motion.div>
  );
};

export default Colors;
