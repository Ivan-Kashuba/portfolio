import React, { useEffect } from "react";
import styles from "../styles/Experience.module.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experienceArr } from "../localData";
import ExperienceItem from "./ExperienceItem";
import SectionHeadlineItem from "./SectionHeadlineItem";

const Experience = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1.5,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({ x: "-100vw" });
    }
  }, [inView]);
  return (
    <div className="section-container">
      <SectionHeadlineItem headlineText="Experience" />
      <div ref={ref}>
        <div className={styles.experienceText}>
          I have finished IT STEP courses, where I got a start knowledge about
          frontend. Starting from making simple HTML/CSS sites, ending with
          React and Angular apps. During this course were discovered a lot of
          technologies needed for web development, created practice projects. I
          have been working at a "Ficus Life" company since May 2022 and keep
          studying at Uzhgorod National University.
        </div>
        <motion.div animate={animation}>
          <div className={styles.expIcons}>
            {experienceArr.map((item, index) => {
              return <ExperienceItem item={item} key={index} />;
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
