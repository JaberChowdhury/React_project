import React from "react";
import { Box, BoxProps } from "@mui/material";

interface propsType extends BoxProps {}

const Glassbox: React.FC<propsType> = ({ ...arg }) => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.25), rgba(255,255,255,0.1))",
        //"linear-gradient(45deg, rgba(.255,.255,.255,0.1), rgba(.255,.255,.255,0.25), rgba(.255,.255,255,0.1))",
        backdropFilter: "blur(10px)",
      }}
      {...arg}
    />
  );
};

export default Glassbox;
