import React from "react";
import styles from "./../styles/Projects.module.scss";
const Modal = ({ isModal, setModal, children }) => {
  return (
    <div
      className={
        isModal ? `${styles.modal} ${styles.modalActive}` : styles.modal
      }
      onClick={() => {
        setModal(false);
      }}
    >
      <div
        className={
          isModal
            ? `${styles.modalContent} ${styles.modalContentActive}`
            : styles.modalContent
        }
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <div
          className={styles.closeBtn}
          onClick={() => {
            setModal(false);
          }}
        >
          X
        </div>
      </div>
    </div>
  );
};

export default Modal;
