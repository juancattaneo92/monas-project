import { RECEIVE_ALL_MENU_ITEMS, RECEIVE_MENU_ITEM } 
from '../actions/MenuItemActions';

const menuItemsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_ALL_MENU_ITEMS:
      newState = [action.menuItems];
      return newState;
    case RECEIVE_MENU_ITEM:
      newState[action.menuItem.id] = action.menuItem
      return newState;
    default:
      return state;
  }
};

export default menuItemsReducer;