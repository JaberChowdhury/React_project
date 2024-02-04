import { Card, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { Colors } from "@/types/colors";

interface propsType {
  data: Colors;
}

const Colorblock = ({ data }: propsType) => {
  return (
    <Link
      key={data.main}
      to={`/colors/${data.main}`}
      style={{ textDecoration: "none" }}
    >
      <Card
        style={{
          width: "120px",
          height: "80px",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          border: "1px solid rgba(255,255,255,0.2)",
          margin: "2px",
        }}
      >
        <Stack>
          <Typography
            sx={{
              padding: "3px",
              borderRadius: "10px",
              fontSize: "15px",
              backgroundColor: "#" + data.main,
              color: "#" + data.opposite,
            }}
            variant="h6"
          >
            #{data.main}
          </Typography>
          <Typography
            style={{
              padding: "3px",
              borderRadius: "10px",
              fontSize: "15px",
              backgroundColor: "#" + data.opposite,
              color: "#" + data.main,
            }}
            variant="h6"
          >
            #{data.opposite}
          </Typography>
        </Stack>
      </Card>
    </Link>
  );
};

export default Colorblock;
