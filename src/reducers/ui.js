import {
  SET_GENRE_FILTER,
  SET_RATING_FILTER,
} from '../constants/actions';

export const initialState = {
  movieFilter: {
    genres: [],
    rating: 3,
  },
}

export function store(state = initialState, action) {

  const { payload, type } = action;

  switch (type) {

    case SET_GENRE_FILTER:

      
      return {
        ...state,
        movieFilter: {
          ...state.movieFilter,
          genres: payload.genres,
        }
      };

    case SET_RATING_FILTER:

      
      return {
        ...state,
        movieFilter: {
          ...state.movieFilter,
          rating: payload.rating,
        }
      };
    default:
      return state;
  }
}
