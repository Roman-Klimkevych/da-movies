import actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
  selectedGenre: 0,
  selectedMovie: 0,
  isNav: true,
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_DATA_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case actionTypes.GET_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case actionTypes.GET_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case actionTypes.SELECT_GENRE:
      return {
        ...state,
        selectedGenre: payload,
      };
    case actionTypes.SELECT_MOVIE:
      return {
        ...state,
        selectedMovie: payload,
      };
    case actionTypes.SET_IS_NAV:
      return {
        ...state,
        isNav: payload,
      };
    default:
      return state;
  }
};

export default reducer;
