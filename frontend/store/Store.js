import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/RootReducer';
import logger from "redux-logger"
import thunk from 'redux-thunk';

const middlewares = [thunk];

if (process.env.NODE_ENV !== "production") {
  // must use 'require' (import only allowed at top of file)
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}


const configureStore = (preloadedState = {}) => {
  return createStore(RootReducer, preloadedState, applyMiddleware(thunk, logger))
}

export default configureStore;