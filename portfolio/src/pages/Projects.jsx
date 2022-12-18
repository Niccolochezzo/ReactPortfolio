import React from "react";
import "../styles/Projects.css";
import video from "../video.mp4";
import content from "../data";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="top-banner">
        <div className="top-banner-content">
          <h1>
            It’s Not What You Look At That Matters, <br /> It’s What You
            <span> See.</span>
          </h1>
          <video
            src={video}
            autoPlay
            muted
            loop
            className={`resp-iframe `}
          ></video>
        </div>
        <div className="scrolldown">
          <span>&#8675;</span>
        </div>
        <div className="back-text">
          <h1 className="back-heading">PROJECTS</h1>
        </div>
      </div>
      <div className="main-container menu-list">
        {content.map(({ title, url, link }, index) => (
          <a href={link} target="_blank" rel="noreferrer">
            <div key={url} className="menu-item">
              <h1 className="menu-title">
                <span className="counter">{index + 1}.</span>
                <span>{title}</span>
              </h1>
              <h1 className="menu-title clone">
                <span className="counter">{index + 1}.</span>
                {title}
              </h1>

              <div className="menu-image-container">
                <div
                  className="menu-image"
                  style={{ backgroundImage: `url(${url})` }}
                />
              </div>
            </div>
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
