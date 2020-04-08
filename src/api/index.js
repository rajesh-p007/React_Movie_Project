import APIBase from './base';
import config from '../config';

export const base = new APIBase(config.tmdb.endpoint);

export function getPosterEndpoint(posterPath) {
  return `${config.tmdb.endpointPoster}/${posterPath}`
}

export default {

  getNowPlayingMovies: () => base.get('movie/now_playing', {
    'sort_by': 'popularity.desc',
  }),
  getGenreList: () => base.get('genre/movie/list'),
}
