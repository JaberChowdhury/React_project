import { lazy, Suspense, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

// Lazy load each MUI component from its direct path
const Button = lazy(() => import('@mui/material/Button'));
const Card = lazy(() => import('@mui/material/Card'));
const Typography = lazy(() => import('@mui/material/Typography'));

function App() {
  const [count, setCount] = useState(0);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Card className="App">
        <div>
          <a href="https://reactjs.org" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Rspack + React + TypeScript</h1>
        <div className="card">
          <Button
            variant="contained"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </Button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <Typography variant="h6" className="read-the-docs">
          Click on the Rspack and React logos to learn more
        </Typography>
      </Card>
    </Suspense>
  );
}

export default App;
