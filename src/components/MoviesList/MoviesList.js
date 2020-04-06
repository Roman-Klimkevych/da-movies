import React from 'react';
import PropTypes from 'prop-types';
import styles from "./MoviesList.module.css";

const MoviesList = ({ movies, selectedMovie, isNav }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.navList}>
        {movies.map((movie) => (
          <li
            key={movie.id}
            className={`${styles.navItem} ${ !isNav && movies[selectedMovie] === movie ? styles.selected : ''}`}
          >
            <img src={movie.poster_path} alt={movie.title}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  })),
  selectedMovie: PropTypes.number,
  isNav: PropTypes.bool,
};

export default MoviesList;
