import { createSelector } from 'reselect';

const dataSelector = (state) => state.data;
const genreSelector = (state) => state.selectedGenre;

export const getGenres = createSelector(
  dataSelector,
  (data) => {
    const genres = data.reduce((acc, movie) => {
      movie.genre_ids.forEach((genre) => {
        if (!acc.includes(genre)) {
          acc.push(genre);
        }
      });
      return acc;
    }, []);

    return genres.sort()
  },
);

export const getMovies = createSelector(
  dataSelector,
  genreSelector,
  (data, genreIndex) => {
    const genres = getGenres({ data });
    return data.filter((movie) => movie.genre_ids.includes(genres[genreIndex])) || [];
  },
);
