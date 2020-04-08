import {
  SET_GENRE_FILTER,
  SET_RATING_FILTER,
} from '../constants/actions'


export function setGenreFilter(genres = []) {
  return (dispatch) => {
    dispatch({
      type: SET_GENRE_FILTER,
      payload: {
        genres,
      },
    });
  };
}


export function setRatingFilter(rating) {
  return (dispatch) => {
    dispatch({
      type: SET_RATING_FILTER,
      payload: {
        rating,
      },
    });
  };
}
