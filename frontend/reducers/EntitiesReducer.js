import { combineReducers } from 'redux';
import usersReducer from './UserReducer';
import menuItemsReducer from './MenuItemReducer';

const entitiesReducer = combineReducers({
  user: usersReducer,
  menuItem: menuItemsReducer
});

export default entitiesReducer;