import React from 'react';
// import PropTypes from 'prop-types';

import MoviesList from '../../components/MoviesList';
import InfoSection from '../../components/InfoSection';
import ButtonsSection from '../../components/ButtonsSection';
import styles from "./DetailsPage.module.css";

const DetailsPage = ({
  history,
  match,
  selectedGenre,
  genres,
  movies,
  getData,
}) => {
  const details = movies.find((movie) => movie.id.toString() === match.params.id);

  const handleEvent = React.useCallback((e) => {
   if (e.key === 'b') {
      history.push('/')
    }
  }, [history]);

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
      <div className={styles.postersWrap}>
        <div className={styles.posters}>
          <MoviesList movies={movies} />
        </div>
      </div>
      { details ? (
        <div className={styles.detailsWrap}>
          <div className={styles.title}>{`${details.title} (${details.release_date?.slice(0, 4)})`}</div>
          <div className={styles.details}>
            <div className={styles.detailsPoster}>
              <InfoSection details={details} />
              <div className={styles.image}>
                <img src={details.poster_path} alt={details.title}/>
              </div>
              <ButtonsSection />
            </div>
            <div className={styles.detailsOverview}>
              <div>{details.overview}</div>
            </div>
          </div>
        </div>
      ) : (<div className={styles.detailsWrap}>Movie Not Found</div>)}
    </div>
  );
};

// DetailsPage.propTypes = {
//   classes: PropTypes.objectOf(PropTypes.string),
// };


export default DetailsPage;
