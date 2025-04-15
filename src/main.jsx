import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { CartProvider } from './context/CartContext'; // 👈 importa el CartProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider> {/* 👈 envuelve la app */}
        <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
