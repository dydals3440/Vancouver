import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import {
  Home,
  SingleProduct,
  Cart,
  CheckOut,
  Error,
  About,
  Products,
  PrivateRoute,
} from './pages';
import { ProductsProvider } from './context/products_context';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/products/:id',
        element: <SingleProduct />,
      },
      {
        path: '/checkout',
        element: <CheckOut />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ProductsProvider>
    <RouterProvider router={router} />
  </ProductsProvider>
);
