import Container from "react-bootstrap/Container";

import "./header.css";

import Navbar from "./Navbar";
import Search from "./Search";
import FlyoutCart from "./FlyoutCart";
import Profile from "./Profile";
import PromoBar from "./PromoBar";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

const variants = {
  visible: {
    y: 0,
  },
  hidden: {
    y: "-100%",
  },
};

export default function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    console.log(latest, previous);

    if (latest > previous && latest > 100) setIsHidden(true);
    else {
      setIsHidden(false);
    }
  });
  return (
    <motion.header
      className="site-header position-fixed w-100 top-0 bg-white"
      variants={variants}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <PromoBar />
      <div className="main-header">
        <Container className="d-flex justify-content-between align-items-center py-2">
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
