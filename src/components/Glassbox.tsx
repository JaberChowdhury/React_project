import { Box, BoxProps } from "@mui/material";
import React from "react";

interface propsType extends BoxProps {}

const Glassbox: React.FC<propsType> = ({ ...props }) => {
  return (
    <Box
      sx={{
        width: "150px",
        height: "100px",
        background: "rgba(255,255,255,.5)",
        // background: "rgba(0,0,0,1)",
        backdropFilter: "blur(.4px)",
      }}
      {...props}
    />
  );
};

export default Glassbox;
