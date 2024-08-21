import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "@fontsource/open-sauce-one";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

import Home from "./pages/Home";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",

    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: "shop",
        element: <h1>Shop</h1>,
      },
      {
        path: "/blog",
        element: <div>This is blog</div>,
      },
    ],
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/login-in",
    element: <div>This is login</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
