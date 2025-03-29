import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ModelContextProvider } from './context/ModelContextProvider.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ModelContextProvider>
      <App />
    </ModelContextProvider>
  </React.StrictMode>,
);
