import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


import './index.scss';


import App from './App';
import { UserProvider } from './contexts/user.context';
import { ProductsProvider } from './contexts/products.context';
import { CartProvider } from './contexts/cart.context';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
      <BrowserRouter>
        <UserProvider>
          <ProductsProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </ProductsProvider>
        </UserProvider>
      </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
// Grab App component around by UserProvider to all children of App Compontent
// can access data and set data in UserProvider