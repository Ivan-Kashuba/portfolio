import React from "react";
import styles from "./../styles/Intro.module.scss";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.home_bg}></div>
      <div className={styles.black}></div>
      <div className={styles.introText}>
        {/*<div className={styles.info}>*/}
        {/*  <div className={styles.infoItem}>Ivan Kashuba</div>*/}
        {/*  <div className={styles.infoItem}>Front-end Developer</div>*/}
        {/*</div>*/}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.5,
              },
            },
          }}
        >
          <h1 className={styles.mainText}>
            Hello, I&#39;m{" "}
            <span className={styles.mainTextSpan}>Ivan Kashuba</span>. I&#39;m a
            Front-End developer
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
