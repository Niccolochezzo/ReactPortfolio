import React, { useState } from "react";
import "../styles/header.css";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [headerColor, setHeaderColor] = useState("#201f22");

  useEffect(() => {
    if (location.pathname === "/about") {
      setHeaderColor("rgb(223, 223, 223)");
    } else {
      setHeaderColor("#201f22");
    }
  }, [location]);

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
              <NavLink
                style={{ color: headerColor, transition: "all 0.3s" }}
                to="/home"
              >
                home
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{ color: headerColor, transition: "all 0.3s" }}
                to="/about"
              >
                about
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{ color: headerColor, transition: "all 0.3s" }}
                to="/projects"
              >
                projects
              </NavLink>
            </li>
          </ul>
        </motion.nav>
      </nav>
    </motion.div>
  );
};

export default Header;
