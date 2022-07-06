import React from "react";
import { projectsArr } from "../localData";
import styles from "./../styles/Projects.module.scss";
import Image from "next/image";
import Preloader from "./Preloader";

const DetailedExperienceItem = ({ projectName }) => {
  const proj = projectsArr.filter((elem) => {
    return elem.projectName === projectName;
  });

  const project = proj[0];

  if (!project) {
    return <Preloader />;
  }

  if (project) {
    return (
      <div className={styles.detailedContainer}>
        <div className={styles.projImaged}>
          {project ? (
            <Image
              src={project.img}
              layout="fill"
              className={styles.projImage}
            />
          ) : null}
        </div>
        <div className={styles.projName}>{projectName}</div>
        <div className={styles.projMean}>{project.shortDescription}</div>
        <div className={styles.projDescription}>{project.description}</div>
        <div className={styles.projLinks}>
          {project.webSiteLink ? (
            <a href={project.webSiteLink} target="_blank" rel="noreferrer">
              <div className={`${styles.projItemButton} ${styles.projItem}`}>
                View site
              </div>
            </a>
          ) : null}
          <div className={styles.projItem}>
            <a href={project.githubLink} target="_blank" rel="noreferrer">
              <Image src={"/github.png"} width={35} height={35} />
            </a>
          </div>
        </div>
      </div>
    );
  }
};

export default DetailedExperienceItem;
