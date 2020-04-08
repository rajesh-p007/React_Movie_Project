import {
  FETCH_MOVIES,
  FETCH_GENRES,
  STATUS_START,
  STATUS_SUCCESS,
  STATUS_ERROR,
} from '../constants/actions'
import api from '../api';

export function fetchMovies() {
  return (dispatch) => {
    dispatch({
      type: FETCH_MOVIES,
      status: STATUS_START,
      payload: {},
    });

    api.getNowPlayingMovies().then(
      (response) => {
        dispatch({
          type: FETCH_MOVIES,
          status: STATUS_SUCCESS,
          payload: { results: response.data.results },
        });
      },
      error => dispatch({
        type: FETCH_MOVIES,
        status: STATUS_ERROR,
        payload: { error },
      }),
    );
  };
}

export function fetchGenres() {
  return (dispatch) => {
    dispatch({
      type: FETCH_GENRES,
      status: STATUS_START,
      payload: {},
    });

    api.getGenreList().then(
      (response) => {
        dispatch({
          type: FETCH_GENRES,
          status: STATUS_SUCCESS,
          payload: { results: response.data.genres },
        });
      },
      error => dispatch({
        type: FETCH_GENRES,
        status: STATUS_ERROR,
        payload: { error },
      }),
    );
  };
}