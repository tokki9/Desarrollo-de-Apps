import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import { Layout } from "./Layout";
import { Home } from "./Home";
import { Perfil } from "./Perfil";
import { NotFound } from "./NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "perfil/:usuarioId", Component: Perfil },
      { path: "*", Component: NotFound },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);