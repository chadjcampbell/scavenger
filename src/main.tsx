import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";
import Home from "./routes/Home";
import Leaderboard from "./routes/Leaderboard";
import Play from "./routes/Play";
import Root from "./routes/Root";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        { path: "/play", element: <Play /> },
        { path: "/leaderboard", element: <Leaderboard /> },
      ],
    },
  ],
  { basename: "/scavenger/" }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
