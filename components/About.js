import React from "react";
import styles from "./../styles/About.module.scss";
import SectionHeadlineItem from "./SectionHeadlineItem";
import Image from "next/image";
const About = () => {
  return (
    <div className="section-container">
      <SectionHeadlineItem headlineText="About" />
      <div className={styles.aboutContent}>
        <div className={styles.ownImage}>
          <Image src="/pg.png" width={300} height={300} />
        </div>
        <div className={styles.aboutText}>
          I'm Ivan Kashuba, a 21-year-old Ukrainian Front-end developer. I am a
          5th year student of "Computer engineering" speciality at the Uzhgorod
          National University and working at FicusLife IT-company.
        </div>
      </div>
    </div>
  );
};

export default About;
