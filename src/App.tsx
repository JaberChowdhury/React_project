import "@fontsource/roboto/700.css";
import data from "./Colors";
import Box from "./Box";
import { Container } from "@mui/material";

interface colorsType {
  name: string;
  value: {
    muiName: string;
    value: string;
  }[];
}

const App = () => {
  const Colors: colorsType[] = data;
  return (
    <Container
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#b0bec5",
      }}
    >
      {Colors.map((color) => {
        return <Box name={color.name} colors={color.value} />;
      })}
    </Container>
  );
};

export default App;
