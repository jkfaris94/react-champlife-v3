import React from 'react';
import { createRoot } from 'react-dom/client';
import './App';
import App from './App';

// Import Firebase config 
import './Firebase/Firebase.config';  

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);