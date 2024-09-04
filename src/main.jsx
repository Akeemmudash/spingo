import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "@fontsource/open-sauce-one";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

import Home from "./pages/Home";
import Layout from "./pages/Layout";
import { SignIn, SignUp } from "./pages/SignUp";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Shop from "./pages/shop";
import Products from "./pages/shop/Products";
import ContactUs from "./pages/ContactUs/index";
import NotFound from "./pages/NotFound/NotFound";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "shop/:id/product",
        element: <Products />,
      },
      {
        path: "blog",
        element: <div>This is blog</div>,
      },
      {
        path: "contact",
        element: <div><ContactUs /></div>,
      },
      {
        path: "*", // This will match all undefined routes
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/login-in",
    element: <SignIn />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
