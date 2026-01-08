import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Set CSS variables for public URL images
const rootElement = document.documentElement;
rootElement.style.setProperty('--bg-image', `url(${process.env.PUBLIC_URL || ''}/images/background-image.png)`);
rootElement.style.setProperty('--section-image-2', `url(${process.env.PUBLIC_URL || ''}/images/section-image-2.svg)`);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


