import React, { useState } from "react";
import SectionHeadlineItem from "./SectionHeadlineItem";
import styles from "./../styles/Projects.module.scss";
import ProjectItem from "./ProjectItem";
import { projectsArr } from "../localData";
import Modal from "./Modal";
import DetailedExperienceItem from "./DetailedExperienceItem";

const Projects = () => {
  const [isModal, setModal] = useState(false);
  const [projectName, setProjectName] = useState("");
  return (
    <div className="section-container">
      <SectionHeadlineItem headlineText="Projects" />
      <div className={styles.projContainer}>
        {projectsArr.map((project, index) => {
          return (
            <ProjectItem
              project={project}
              setModal={setModal}
              key={index}
              setProjectName={setProjectName}
            />
          );
        })}
      </div>
      <Modal isModal={isModal} setModal={setModal}>
        <DetailedExperienceItem projectName={projectName} />
      </Modal>
    </div>
  );
};

export default Projects;
