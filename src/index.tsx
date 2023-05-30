import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import "./index.css"
import Home from "./pages/Home"
import Settings from "./pages/Settings"

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/settings",
      element: <Settings />,
    },
  ],
  {
    future: {
      v7_normalizeFormMethod: true,
    },
    basename: "/",
  },
)

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
