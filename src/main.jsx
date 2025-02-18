import React from 'react';
import { createRoot } from 'react-dom';
import App from './Components/App';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);