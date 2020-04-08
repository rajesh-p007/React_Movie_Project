import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setGenreFilter, setRatingFilter } from '../../actions/ui';
import { getAvailableGenreIdsFromMovies } from '../../utils/FilterUtils';
import './MoviesFilter.scss';

export class MovieListFilter extends Component {

  static propTypes = {
    availableGenreIds: PropTypes.arrayOf(PropTypes.number),
    genres: PropTypes.object.isRequired,
    movieFilter: PropTypes.object.isRequired,
    setGenreFilter: PropTypes.func.isRequired,
    setRatingFilter: PropTypes.func.isRequired,
  }

  onToggleGenre(genreId) {
    const genreFilter = this.props.movieFilter.genres;
    const index = genreFilter.indexOf(genreId);
    if (index > -1) {
      genreFilter.splice(index, 1);
    } else {
      genreFilter.push(genreId);
    }

    this.props.setGenreFilter(genreFilter);
  }

  onRatingChange(rating) {
    if (rating < 0 || rating > 10) {
      return;
    }
    this.props.setRatingFilter(rating);
  }

  render() {
    const { availableGenreIds, genres, movieFilter } = this.props;
    const genreFilter = movieFilter.genres;

    return (
      <div className="movie-list-filter" style={{background : 'white'}}>

        <div className="filter-container">
          <h2>Filter</h2>
          <h3><u>Genre</u></h3>
          {availableGenreIds.map(genreId =>
            (<div className="checkbox-container" key={genreId}>
              <input
                type="checkbox"
                id={genreId}
                name={genreId}
                value={genreId}
                checked={genreFilter.indexOf(genreId) > -1}
                onChange={() => this.onToggleGenre(genreId)}
              />
              <label htmlFor={genreId}>{genres[genreId].name}</label>
            </div>)
          )}
        </div>

        <div className="filter-container">
          <h3><u>Rating</u></h3>
          <input
            value={movieFilter.rating}
            onChange={(e) => this.onRatingChange(e.target.value)}
            type="number" name="height" placeholder="Select rating" step="0.5" />
        </div>

      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    availableGenreIds: getAvailableGenreIdsFromMovies(state.movies.moviesNowPlaying.list),
    genres: state.movies.genres.genresByIds,
    movies: state.movies.moviesNowPlaying.list,
    movieFilter: state.ui.movieFilter,
  }
}


const mapDispatchToProps = {
  setGenreFilter,
  setRatingFilter,
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieListFilter);
