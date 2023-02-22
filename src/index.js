import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home'
import App from './App'
import Products from './components/Products';
import Cart from './components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import ProductContextProvider from './context/ProductContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "Products",
        element: <Products/>,
      },
      {
        path: "Cart",
        element: <Cart/>,
      },
 
    ]
  },
  
]);

createRoot(document.getElementById("root")).render(
  <ProductContextProvider>
    <RouterProvider router={router} />
  </ProductContextProvider>
  
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
