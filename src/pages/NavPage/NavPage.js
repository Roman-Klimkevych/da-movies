import React from 'react';
// import PropTypes from 'prop-types';

import MoviesNav from '../../components/MoviesNav';
import MoviesList from '../../components/MoviesList';
import styles from "./NavPage.module.css";

const NavPage = ({
  history,
  selectedGenre,
  selectedMovie,
  isNav,
  genres,
  movies,
  getData,
  selectGenre,
  selectMovie,
  setIsNav,
}) => {

  const handleEvent = React.useCallback((e) => {
    e.preventDefault();
    if (isNav) {
      if (e.key === 'ArrowUp') {
        selectGenre(selectedGenre === 0 ? genres.length - 1 : selectedGenre - 1);
      } else if (e.key === 'ArrowDown') {
        selectGenre(selectedGenre === genres.length - 1 ? 0 : selectedGenre + 1);
      }  else if (e.key === 'Enter') {
        setIsNav(false);
      }
    } else {
      if (e.key === 'ArrowLeft') {
        selectMovie(selectedMovie === 0 ? movies.length - 1: selectedMovie - 1);
      } else if (e.key === 'ArrowRight') {
        selectMovie(selectedMovie === movies.length - 1 ? 0 : selectedMovie + 1);
      }  else if (e.key === 'b') {
        setIsNav(true);
        selectMovie(0);
      }  else if (e.key === 'Enter') {
        history.push(`/${movies[selectedMovie].id}`);
      }
    }
  }, [history, genres, movies, selectedGenre, selectedMovie, selectGenre, selectMovie, isNav, setIsNav]);

  React.useEffect(() => {
    getData();
  }, [getData]);

  React.useEffect(() => {
    document.addEventListener('keydown', handleEvent);

    return () => {
      document.removeEventListener('keydown', handleEvent);
    };
  }, [handleEvent]);

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <MoviesNav genres={genres} selectedGenre={selectedGenre} isNav={isNav} />
      </div>
      <div className={styles.posters}>
        <MoviesList movies={movies} selectedMovie={selectedMovie} isNav={isNav} />
      </div>
    </div>
  );
};

// NavPage.propTypes = {
//   classes: PropTypes.objectOf(PropTypes.string),
// };


export default NavPage;
