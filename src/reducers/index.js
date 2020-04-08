import { combineReducers } from 'redux';

import * as movies from './movies';
import * as ui from './ui';

export default combineReducers({
  movies: movies.store,
  ui: ui.store,
});

export const initialState = {
  movies: movies.initialState,
  ui: ui.initialState,
}
