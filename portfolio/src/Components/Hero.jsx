import React, { useState, useEffect } from "react";
import "../styles/hero.css";
import { motion, AnimatePresence } from "framer-motion";
import HeroTwo from "./HeroTwo";

const Hero = () => {
  const [showElement, setShowElement] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowElement(false);
    }, 3020);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="hero">
      <div className="heroContainer">
        <AnimatePresence>
          {showElement ? (
            <motion.div className="wrapper">
              <motion.div
                initial={{ y: 2000 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.6 }}
                className="vert"
              ></motion.div>
              <motion.div
                initial={{ x: -4000 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.8 }}
                className="hori"
              ></motion.div>
              <motion.h1
                initial={{ x: -4000 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="heading"
              >
                PORTFOLIO
              </motion.h1>
              <motion.div
                initial={{ x: -2000 }}
                animate={{ x: 4000 }}
                transition={{ delay: 2.7, duration: 0.6 }}
                className="clear"
              ></motion.div>
            </motion.div>
          ) : (
            <HeroTwo />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Hero;
