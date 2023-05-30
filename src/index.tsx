import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import "./index.css"
import HomePage from "./pages/Home"
import InstancesPage from "./pages/Home"
import ServersPage from "./pages/Home"
import SettingsPage from "./pages/Settings"

import Sidebar from "./components/Sidebar"

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/instances",
      element: <InstancesPage />,
    },
    {
      path: "/servers",
      element: <ServersPage />,
    },
    {
      path: "/settings",
      element: <SettingsPage />,
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
    <div className="flex flex-row w-screen h-screen">
      <Sidebar />
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
