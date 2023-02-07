import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Student from "./pages/Student";
import Teacher from "./pages/Teacher";
import Home from "./pages/Home";
import PersonContextProvider from './contexts/PersonContext';

const router = createBrowserRouter([
  { path: `/`, element: <App /> },
  { path: `/`, element: <Home /> },
  { path: `/Student`, element: <Student /> },
  { path: `/Teacher`, element: <Teacher />},
]);


createRoot(document.getElementById("root")).render(

  <React.StrictMode>
    <PersonContextProvider>
    <RouterProvider router={router}/>
    </PersonContextProvider>
  </React.StrictMode>
  
  
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
