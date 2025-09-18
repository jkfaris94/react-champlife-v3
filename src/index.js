import React from 'react';
import { createRoot } from 'react-dom/client';
import './App';
import App from './App';

// Import Firebase config (using the existing one you found)
import './Firebase/Firebase.config';  // Or whatever the path is

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);