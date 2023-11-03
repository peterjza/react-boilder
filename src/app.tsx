import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root')!);

const App: React.FC = () => {
  return <h1>Helloo, React!</h1>;
};


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);