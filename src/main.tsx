import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import AuctionItemProvider from './context/AuctionItemProvider.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuctionItemProvider>
      <App />
    </AuctionItemProvider>
  </React.StrictMode>,
);
