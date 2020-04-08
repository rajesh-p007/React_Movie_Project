import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getPosterEndpoint } from '../../api';
import { Movie } from '../../models';
import Tag from '../GenereTag';
import './MovieCard.scss';

class MovieCell extends Component {

  static propTypes = {
    movie: PropTypes.instanceOf(Movie).isRequired,
    genres: PropTypes.object.isRequired,
  }

  render() {
    const { genres, movie } = this.props;

    return (


<div class="container movie-cell">
  <div class="card" style={{"width": "100%"}}>
    <img class="card-img-top poster" src={getPosterEndpoint(movie.posterPath)} alt="Card image" style={{"width":"100%"}} />
    <div class="card-body">
      <h3 class="card-title">{movie.title}</h3>
      <h5 className="card-text rating">Rating: {movie.voteAverage}</h5>
      <div>
      {(movie.genreIds || []).map(id => (
          <Tag key={id} text={genres[id].name} />
        ))}
        </div>
    </div>
  </div>
  </div>

)
}
}


export default MovieCell;
