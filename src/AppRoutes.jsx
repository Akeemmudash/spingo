import Blog from "./pages/Blog/Blog";
import BlogPost from "./pages/Blog/BlogPost";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound/NotFound";
import Product from "./pages/Product";
import Shop from "./pages/shop";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import { SignIn, SignUp } from "./pages/SignUp";
import { createBrowserRouter } from "react-router-dom";

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
        element: <Product />,
      },
      {
        path: "blog",
        element: (
          <div>
            <Blog />
          </div>
        ),
      },
      {
        path: "blog/:id/blogpost",
        element: (
          <div>
            <BlogPost />
          </div>
        ),
      },
      {
        path: "contact",
        element: (
          <div>
            <ContactUs />
          </div>
        ),
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
    path: "/login-in",
    element: <SignIn />,
  },
]);
export default router;
