import React from "react";
import "../styles/header.css";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <motion.div className="header">
      <nav className="headerContainer">
        <motion.div
          initial={{ x: 4000 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="logo"
        >
          <a href="/">CHRKZ</a>
        </motion.div>
        <motion.nav
          initial={{ x: -4000 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="links">
            <li>
              <NavLink to="/home">home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/projects">projects</NavLink>
            </li>
          </ul>
        </motion.nav>
      </nav>
    </motion.div>
  );
};

export default Header;
