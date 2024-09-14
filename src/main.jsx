import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "@fontsource/open-sauce-one";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Home from "./pages/Home";
import Layout from "./pages/Layout";
import { SignIn, SignUp } from "./pages/SignUp";
import Product from "./pages/Product";
import Shop from "./pages/Shop/Shop";
import ContactUs from "./pages/ContactUs/index";
import Blog from "./pages/Blog/Blog";
import BlogPost from "./pages/Blog/BlogPost";
import Cart from "./pages/Cart/Cart";
import MyAccount from "./pages/MyAccount/Account";
import NotFound from "./pages/NotFound/NotFound";
import NoInternet from "./pages/NoInternet/NoInternet";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { element: <Home />, index: true },
      { path: "shop", element: <Shop /> },
      { path: "shop/:id/product", element: <Product /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:id/blogpost", element: <BlogPost /> },
      { path: "contact", element: <ContactUs /> },
      { path: "cart", element: <Cart /> },
      { path: "account", element: <MyAccount /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/login-in", element: <SignIn /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <NoInternet />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
