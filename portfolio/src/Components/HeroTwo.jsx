import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/hero.css";
import { motion } from "framer-motion";

const HeroTwo = () => {
  return (
    <div className="secondHero">
      <div className="menuItems">
        <motion.h1
          className="heroTitle"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span>Hey, I'm Niko Cherkezishvili</span>
        </motion.h1>
        <motion.h1
          className="heroTitle clone"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span>Niko Cherkezishvili</span>
        </motion.h1>
      </div>

      <div className="paras">
        <motion.p
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          I’m a graphic designer, UX/UI designer
        </motion.p>
        <motion.p
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          & front-end web developer
        </motion.p>
      </div>
      <div className="heroLinkButtons">
        <motion.div
          initial={{ y: 50, scale: 0 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ delay: 1.3, duration: 0.1 }}
          className="callToAction"
        >
          <NavLink to="/projects">→ see my rojects</NavLink>
        </motion.div>
        <motion.div
          initial={{ y: 50, scale: 0 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.1 }}
          className="callToAction"
        >
          <NavLink to="/about">→ more about me</NavLink>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroTwo;
