import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);
const logger = createLogger({
  predicate: (getState, action) => action.type !== false
});

let middlewares = [];

if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger);
}

const store = createStore(
  reducer,
  applyMiddleware(...middlewares)
);

export default store;