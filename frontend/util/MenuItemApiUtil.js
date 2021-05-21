export const fetchMenuItems = (category) => {
  return $.ajax({
    url: `api/menu_items/${category}`,
    method: 'GET',
  })
}
export const fetchMenuItem = (menuItemId) => {
  return $.ajax({
    url: `api/menu_items/${menuItemId}`,
    method: 'GET',
  })
}
