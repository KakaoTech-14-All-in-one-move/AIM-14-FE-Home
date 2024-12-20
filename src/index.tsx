import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.css';
import App from './App.tsx';
import { ThemeProvider } from './contexts/ThemeContext.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);