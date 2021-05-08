import * as MenuItemAPIUtil from '../util/MenuItemApiUtil';

export const RECEIVE_ALL_MENU_ITEMS = 'RECEIVE_ALL_MENU_ITEMS';
export const RECEIVE_MENU_ITEM = 'RECEIVE_MENU_ITEM';

export const receiveAllMenuItems = (menuItems) => {
  return {
    type: RECEIVE_ALL_MENU_ITEMS,
    menuItems
  }
}
export const receiveMenuItem = (menuItem) => {
  return {
    type: RECEIVE_MENU_ITEM,
    menuItem,
  }
}

//Thunk Actions

export const fetchMenuItems = () => dispatch => {
  return MenuItemAPIUtil.fetchMenuItems()
    .then( result => dispatch(receiveAllMenuItems(result)))
}

export const fetchMenuItem = (menuItemId) => dispatch => {
  return MenuItemAPIUtil.fetchMenuItem(menuItemId)
  .then( result => dispatch(receiveMenuItem(result)))

};