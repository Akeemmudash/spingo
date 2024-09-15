import Container from "react-bootstrap/Container";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useStickyHeader from "../../hooks/useStickyHeader";
import FlyoutCart from "./FlyoutCart";
import "./header.css";
import Navbar from "./Navbar";
import Profile from "./Profile";
import PromoBar from "./PromoBar";
import Search from "./Search";

const variants = {
  visible: {
    y: 0,
  },
  hidden: {
    y: "-100%",
  },
};

export default function Header() {
  const [isPromoBarShowing, setIsPromoBarShowing] = useState(true);
  const isHidden = useStickyHeader();
  const headerRef = useRef(null);

  useEffect(() => {
    document.body.style.setProperty(
      "--site-header-height",
      `${headerRef.current.clientHeight}px`
    );
    console.log("first", headerRef.current.clientHeight);
  }, [isPromoBarShowing]);

  return (
    <motion.header
      className="site-header position-sticky w-100 top-0 bg-white"
      ref={headerRef}
      variants={variants}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <PromoBar
        ShowPromoBar={isPromoBarShowing}
        setShowPromoBar={setIsPromoBarShowing}
      />
      <div className="main-header">
        <Container className="d-flex justify-content-between align-items-center py-3 py-lg-2">
          <Navbar />
          <div className="header__icons d-flex justify-content-between align-items-center ">
            <div className="d-none d-md-flex gap-3">
              <Search />
              <Profile />
            </div>

            <FlyoutCart />
          </div>
        </Container>
      </div>
    </motion.header>
  );
}
