import { Outlet } from "react-router-dom";
import MuiThemeProvider from "@/app/MuiThemeProvider";
import { Container } from "@mui/material";
import Navbar from "@/components/Navbar";

export default function App() {
  return (
    <MuiThemeProvider>
      <Container>
        <Navbar />
        <main
          style={{
            paddingTop: "10px",
          }}
        >
          <Outlet />
        </main>
      </Container>
    </MuiThemeProvider>
  );
}
