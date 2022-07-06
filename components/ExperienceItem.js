import React from "react";
import styles from "../styles/Experience.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

const ExperienceItem = ({ item }) => {
  return (
    <motion.div
      className={styles[item.style]}
      whileHover={{
        position: "relative",
        zIndex: 1,
        cursor: "pointer",
        scale: [1, 1.4, 1.2],
        rotate: [0, 10, -10, 0],
        transition: {
          duration: 0.2,
        },
      }}
    >
      <a target="_blank" href={item.link}>
        <Image src={item.img} width={300} height={300} />
      </a>
    </motion.div>
  );
};

export default ExperienceItem;
