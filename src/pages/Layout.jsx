import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Layout() {
  return (
    <div className="layout  d-flex  flex-column h-">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
