import React from 'react';
import ReactDOM from 'react-dom';
import { ProdusProvider } from "./context/Produss";
import App from './App';
import './index.css';
import { CartProvider } from './context/cart';

ReactDOM.render(
  <ProdusProvider>
    <CartProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CartProvider>
  </ProdusProvider>,
  document.getElementById('root')
);
