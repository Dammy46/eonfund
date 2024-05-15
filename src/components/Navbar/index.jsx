import React, { useState } from "react";
import EON from "../../assets/svgs/eon-logo.svg";
import "./navbar.css";
import { HiMiniBars3 } from "react-icons/hi2";
import { RiCloseLargeFill } from "react-icons/ri";
import NavMenu from "../NavMenu";
import { AnimatePresence } from "framer-motion";
import AnimatedButton from "../AnimatedButton";
const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <header className="app-header">
      <nav className="container flex">
        <span className="eon-logo-wrap">
          <a href="#">
            <div className="eon-logo">
              <img src={EON} alt="eon-lgo" />
            </div>
          </a>
        </span>
        <div className="flex nav-wrap">
          <a
            href="https://t.co/obRmbwRdhr"
            target="_blank"
            className="join-wrap"
          >
            <AnimatedButton>Apply for funding</AnimatedButton>
          </a>
          <div className="menu-wrap">
            <div className="flex burger" onClick={() => setActive(!active)}>
              {active ? <RiCloseLargeFill /> : <HiMiniBars3 />}
            </div>
            <AnimatePresence>
              {active && <NavMenu setActive={setActive} />}
            </AnimatePresence>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
