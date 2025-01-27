import { useState, useCallback, useMemo } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Card, Container, Link, Typography } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((count) => count + 1);
  }, [setCount]);

  const memoizedContainer = useMemo(
    () => (
      <Container>
        <Link href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" loading="lazy" />
        </Link>
        <Link href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
            loading="lazy"
          />
        </Link>
      </Container>
    ),
    []
  );

  const memoizedButton = useMemo(
    () => (
      <Button variant="contained" onClick={handleClick}>
        count is {count}
      </Button>
    ),
    [handleClick, count]
  );

  const memoizedTypography1 = useMemo(
    () => <Typography variant="h1">Vite + React</Typography>,
    []
  );

  const memoizedTypography2 = useMemo(
    () => (
      <Typography variant="h6" className="read-the-docs">
        Click on the Vite and React logos to learn more
      </Typography>
    ),
    []
  );

  const memoizedCard = useMemo(
    () => (
      <Card className="card">
        {memoizedButton}
        <Typography variant="h6">
          Edit <code>src/App.tsx</code> and save to test HMR
        </Typography>
      </Card>
    ),
    [memoizedButton]
  );

  return (
    <>
      {memoizedContainer}
      {memoizedTypography1}
      {memoizedCard}
      {memoizedTypography2}
    </>
  );
}

export default App;
