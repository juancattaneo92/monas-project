import { combineReducers } from 'redux';
import usersReducer from './UserReducer';

const entitiesReducer = combineReducers({
  user: usersReducer,
});

export default entitiesReducer;