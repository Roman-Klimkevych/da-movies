import React from 'react';
import PropTypes from 'prop-types';
import styles from "./InfoSection.module.css";

const langsMap = {
  en: 'English',
  cn: 'Chinese',
  ko: 'Korean',
}

const InfoSection = ({ details }) => {
  return (
    <div className={styles.info}>
      <div className={styles.infoItem}>
        <div className={styles.infoTitle}>Length</div>
        <div className={styles.infoValue}>{details.length || '--'}</div>
      </div>
      <div className={styles.infoItem}>
        <div className={styles.infoTitle}>Country</div>
        <div className={styles.infoValue}>{details.country || '--'}</div>
      </div>
      <div className={styles.infoItem}>
        <div className={styles.infoTitle}>Language</div>
        <div className={styles.infoValue}>{langsMap[details.original_language]}</div>
      </div>
    </div>
  );
};

InfoSection.propTypes = {
  details: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    original_language: PropTypes.string,
  }),
};

export default InfoSection;
