import actionTypes from './actionTypes';

const url = 'https://raw.githubusercontent.com/roman-curse/videoJson/master/videoJson.json';

export const getData = () => async (dispatch, getState) => {
  if (getState().data.length > 0) {
    return;
  }

  dispatch({
    type: actionTypes.GET_DATA_LOADING,
  });

  try {
    const res = await fetch(url);
    const response = await res.json();

    dispatch({
      type: actionTypes.GET_DATA_SUCCESS,
      payload: response.results,
    });
  } catch (e) {
    dispatch({
      type: actionTypes.GET_DATA_ERROR,
    });
  }
};

export const selectGenre = (genre) => {
  return {
    type: actionTypes.SELECT_GENRE,
    payload: genre
  };
};

export const selectMovie = (movie) => {
  return {
    type: actionTypes.SELECT_MOVIE,
    payload: movie
  };
};

export const setIsNav = (isNav) => {
  return {
    type: actionTypes.SET_IS_NAV,
    payload: isNav
  };
};
