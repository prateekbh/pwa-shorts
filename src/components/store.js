import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import * as reducers from '../reducers';
import thunk from 'redux-thunk';

const reducer = combineReducers(reducers);
const logger = createLogger({
	predicate: (getState, action) => action.type !== false
});

let middlewares = [thunk];
if (process.env.NODE_ENV === `development` || true) {
	middlewares.push(logger);
}

const store = createStore(
	reducer,
	applyMiddleware(...middlewares)
);

export default store;