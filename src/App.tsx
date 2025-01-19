import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Card, Container, Link, Typography } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container>
        <Link href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </Link>
        <Link href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </Link>
      </Container>
      <Typography variant="h1">Vite + React</Typography>
      <Card className="card">
        <Button
          variant="contained"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
        <Typography variant="h6">
          Edit <code>src/App.tsx</code> and save to test HMR
        </Typography>
      </Card>
      <Typography variant="h6" className="read-the-docs">
        Click on the Vite and React logos to learn more
      </Typography>
    </>
  );
}

export default App;
