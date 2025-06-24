// src/main.tsx
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'; // Added BrowserRouter import
import React from 'react'; // Added React import for good practice

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter> {/* BrowserRouter now wraps App here */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);