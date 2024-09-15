import ReadBlog from "./pages/ReadBlog";
import BlogListing from "./pages/BlogListing";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound/NotFound";
import Product from "./pages/Product";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import { SignIn, SignUp } from "./pages/SignUp";
import { createBrowserRouter } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import { MyAccount } from "./pages/MyAccount";

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
        path: "shop/:category",
        element: <Shop />,
      },
      {
        path: "shop/:category/product",
        element: <Product />,
      },
      {
        path: "shop/product/:id",
        element: <Product />,
      },
      {
        path: "blog",
        element: <BlogListing />,
      },
      {
        path: "blog/featured",
        element: <BlogListing />,
      },
      {
        path: "blog/:id/blog-post",
        element: <ReadBlog />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "account",
        element: <MyAccount />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
]);
export default router;
