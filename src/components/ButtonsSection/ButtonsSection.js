import React from 'react';
import styles from "./ButtonsSection.module.css";

const ButtonsSection = () => {
  return (
    <div className={styles.buttons}>
      <div className={styles.buttonItem}>
        <button className={`${styles.button} ${styles.buttonOrange}`}>Play</button>
      </div>
      <div className={styles.buttonItem}>
        <button className={styles.button}>Trailer</button>
      </div>
      <div className={styles.buttonItem}>
        <button className={styles.button}>Add to List</button>
      </div>
    </div>
  );
};

export default ButtonsSection;
