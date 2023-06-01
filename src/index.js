import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
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
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';

// dev - i1bgctfyk7kvzau1.us.auth0.com;
// 6tfmvBGSozZRV4yYUM530oiyfik5JUql

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
        element: (
          // 로그인이 되있어야 작동할 수 있음. requireAdmin={true} admin여부가 필요하면 이렇게 ...rest 를 통해 rest연산자로 접근할 수 있음
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain='dev-i1bgctfyk7kvzau1.us.auth0.com'
    clientId='6tfmvBGSozZRV4yYUM530oiyfik5JUql'
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <RouterProvider router={router} />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);

// Filter는, Products 정보를 필요하므로, 감싸짐당해야함.
