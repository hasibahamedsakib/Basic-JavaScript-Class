import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

//
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About/About.jsx";
import Service from "./Service/Service.jsx";
// import browser router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/service",
    element: <Service />,
  },
]);
// to install react-router-dom.
// npm install react-router-dom localforage match-sorter sort-by

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
