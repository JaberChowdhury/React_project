import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import variant from "@/lib/variant";

const Color = () => {
  const { id } = useParams();

  const data = variant(id || "#000000");
  console.log(data);
  return (
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
      <Typography>{id}</Typography>
      <Typography>{id}</Typography>
      <Box>
        {JSON.stringify(data, null, 4)
          .split("\n")
          .map((line) => {
            return <Typography key={line}>{line}</Typography>;
          })}
      </Box>
    </Box>
  );
};

export default Color;
