import React from "react";
import { motion } from "framer-motion";
import "../styles/about.css";
import niko from "../niko.jpeg";
import nikko from "../nikko.pdf";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="about"
    >
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="leftAbout"
      >
        <div className="upperAbout">
          <div className="div">
            <h3 className="titleAbout">About</h3>
          </div>
          <div>
            <p className="mail">Niccolochezzo@gmail.com</p>
          </div>
        </div>

        <div className="underlineAbout"></div>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="paraAbout"
        >
          Hey, my name is Niko Cherkezishvili. I’m a front-end web developer,
          graphic designer & UX/UI designer. currently based in Batumi, Georgia.
          In my current role, I am responsible for designing, developing, and
          maintaining a variety of web-based applications. I enjoy working
          collaboratively with cross-functional teams to bring projects to life.
          I’m always curious to learn more when it comes to new technologies and
          creative coding.
        </motion.p>
        <div className="underBioWrapper">
          <motion.a
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            href={nikko}
            download
          >
            ↓ Download CV
          </motion.a>
          <ul className="aboutList">
            <motion.li
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              <a
                href="https://github.com/Niccolochezzo"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </motion.li>
            <motion.li
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
            >
              <a
                href="https://www.instagram.com/nikocherkezi/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </motion.li>
            <motion.li
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <a
                href="https://www.facebook.com/profile.php?id=100075439963326"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </motion.li>
          </ul>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="rightAbout"
      >
        <div className="image">
          <img src={niko} alt="" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
