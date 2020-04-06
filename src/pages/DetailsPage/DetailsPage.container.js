import { connect } from 'react-redux';
import { getData, selectGenre } from '../../actions';
import DetailsPage from './DetailsPage';
import { getGenres, getMovies } from '../../selectors';

const mapStateToProps = (state) => ({
  selectedGenre: state.selectedGenre,
  genres: getGenres(state),
  movies: getMovies(state)
});

const mapDispatchToProps = {
  getData,
  selectGenre,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailsPage);
