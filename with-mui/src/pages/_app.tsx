// src/pages/_app.tsx

import { Outlet } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// mui components
import { Container, Typography } from "@mui/material";

export default function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <header>
          <nav>
            <Typography>Navbar</Typography>
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
      </Container>
    </ThemeProvider>
  );
}
