import React from 'react';
import { createRoot } from 'react-dom/client';
import './app.scss';

const root = createRoot(document.getElementById('root')!);

const App: React.FC = () => {
  return <h1 className='bg'>Helloo, React!</h1>;
};


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);