import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Header from "./components/header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Admin from "./components/Admin";

// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
const AppLayout = () => {
  return (
    <React.StrictMode>
      <Header />
      <Outlet />
    </React.StrictMode>
  );
};

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
    ],
  },
]);
root.render(<RouterProvider router={AppRoutes} />);
