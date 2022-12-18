import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/hero.css";
import { motion } from "framer-motion";

const HeroTwo = () => {
  return (
    <div className="secondHero">
      <motion.h1
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Hi, I'm <span>Niko</span>
      </motion.h1>
      <div className="para">
        <div className="paras">
          <motion.p
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Frontend developer and Graphic designer.
          </motion.p>
        </div>
        <div className="paras">
          <motion.p
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            currently based in Batumi, Georgia
          </motion.p>
        </div>
        <div className="paras">
          <motion.p
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            In my current role, I am responsible for designing, developing,
          </motion.p>
        </div>
        <div className="paras">
          <motion.p
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            and maintaining a variety of web-based applications.
          </motion.p>
        </div>
        <div className="paras">
          <motion.p
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            I enjoy working collaboratively with cross-functional teams to bring
            projects to life.
          </motion.p>
        </div>
      </div>
      <motion.div
        initial={{ x: -200, scale: 0 }}
        animate={{ x: 0, scale: 1 }}
        transition={{ delay: 1.8, duration: 0.1 }}
        className="callToAction"
      >
        <NavLink to="/projects">See my work</NavLink>
      </motion.div>
    </div>
  );
};

export default HeroTwo;
