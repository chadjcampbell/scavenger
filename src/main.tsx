import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./routes/Home";
import Leaderboard from "./routes/Leaderboard";
import Play from "./routes/Play";
import Root from "./routes/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/home", element: <Home />, index: true },
      { path: "/play", element: <Play /> },
      { path: "/leaderboard", element: <Leaderboard /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
