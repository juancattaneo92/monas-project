export const fetchMenuItems = () => {
  return $.ajax({
    url: 'api/menu_items',
    method: 'GET',
  })
}
export const fetchMenuItem = (menuItemId) => {
  return $.ajax({
    url: `api/menu_items/${menuItemId}`,
    method: 'GET',
  })
}
