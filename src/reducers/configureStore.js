import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import config from '../config';
import rootReducer from './index';
import { addAuthInterceptor } from '../api/apiAuthInjector';

export default function configureStore(initialState) {
  addAuthInterceptor(config.tmdb.apiKey);
  const middlewares = [
    thunkMiddleware,
  ]

  if (config.logger) {
    middlewares.push(createLogger({ collapsed: true }));
  }

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares),
  );
}