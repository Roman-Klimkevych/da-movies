import { connect } from 'react-redux';
import { getData, selectGenre, selectMovie, setIsNav } from '../../actions';
import NavPage from './NavPage';
import { getGenres, getMovies } from '../../selectors';

const mapStateToProps = (state) => ({
  selectedGenre: state.selectedGenre,
  selectedMovie: state.selectedMovie,
  isNav: state.isNav,
  genres: getGenres(state),
  movies: getMovies(state)
});

const mapDispatchToProps = {
  getData,
  selectGenre,
  selectMovie,
  setIsNav,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavPage);
