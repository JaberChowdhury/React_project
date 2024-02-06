import { Outlet } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container, CssBaseline } from "@mui/material";
import { useSelector } from "react-redux";
import { themeSelector } from "@/features/theme/themeSlice";
import Navbar from "@/components/Navbar";

export default function App() {
  const { theme } = useSelector(themeSelector);

  const themeData = createTheme({
    palette: {
      mode: theme,
    },
  });
  return (
    <ThemeProvider theme={themeData}>
      <Container>
        <CssBaseline />
        <Navbar />
        <main>
          <Outlet />
        </main>
      </Container>
    </ThemeProvider>
  );
}
