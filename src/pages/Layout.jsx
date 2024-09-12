import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Layout() {
  return (
    <div className="layout d-flex flex-column">
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
