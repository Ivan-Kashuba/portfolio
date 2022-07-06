import React from "react";
import styles from "../styles/Projects.module.scss";
import Image from "next/image";

const ProjectItem = ({ project, setModal, setProjectName }) => {
  return (
    <>
      <div className={styles.photoItem}>
        <div className={styles.photo}>
          <Image src={project.img} width={300} height={250} />
        </div>
        <div className={styles.photoItemContent}>
          <div className={styles.photoContentText}>
            <div className={styles.projectName}>{project.projectName}</div>
            <div className={styles.projectWay}>{project.projectTech}</div>
          </div>
          <div
            className={styles.photoContentBtn}
            onClick={() => {
              setModal(true);
              setProjectName(project.projectName);
            }}
          >
            Learn More
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
