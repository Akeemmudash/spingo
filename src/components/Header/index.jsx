import Container from "react-bootstrap/Container";

import "./header.css";

import Navbar from "./Navbar";
import Search from "./Search";
import FlyoutCart from "./FlyoutCart";
import Profile from "./Profile";
import PromoBar from "./PromoBar";

export default function Header() {
  return (
    <div>
      <PromoBar />
      <header className="header">
        <Container className="d-flex justify-content-between align-items-center py-4">
          <Navbar />
          <div className="header__icons d-flex justify-content-between align-items-center ">
            <div className="d-none d-md-flex gap-3">
              <Search />
              <Profile />
            </div>

            <FlyoutCart />
          </div>
        </Container>
      </header>
    </div>
  );
}
