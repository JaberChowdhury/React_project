import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Container, CssBaseline } from "@mui/material";

export default function App() {
  return (
    <>
      <CssBaseline />
      <AnimatePresence mode="wait" initial={false}>
        <main>
          <Container>
            <Outlet />
          </Container>
        </main>
      </AnimatePresence>
    </>
  );
}
