import React from "react";
import styles from "./../styles/Footer.module.scss";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerIcons}>
        <div className={styles.footerIcon}>
          <a
            href="https://github.com/Ivan-Kashuba"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={"/github.png"} width={40} height={40} />
          </a>
        </div>
        <div className={styles.footerIcon}>
          <a href="https://t.me/Yonchi_01" target="_blank" rel="noreferrer">
            <Image src={"/telegram.png"} width={40} height={40} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
