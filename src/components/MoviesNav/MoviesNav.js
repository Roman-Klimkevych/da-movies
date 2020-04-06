import React from 'react';
import PropTypes from 'prop-types';
import styles from "./MoviesNav.module.css";

const MoviesNav = ({ genres, selectedGenre, isNav }) => {
  return (
    <div className={styles.container}>
      <div>
        <span className={styles.title}>Films</span>
      </div>
      <ul className={styles.navList}>
        {genres.map((genre) => (
          <li
            key={genre}
            className={`
              ${styles.navItem}
              ${ genres[selectedGenre] === genre && isNav  ? styles.outlined : ''}
              ${ genres[selectedGenre] === genre ? styles.selected : ''}
            `}
          >
            <span>{ genre }</span>
            <span className={styles.arrow}>></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

MoviesNav.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string),
  selectedGenre: PropTypes.number,
  isNav: PropTypes.bool,
};

export default MoviesNav;
