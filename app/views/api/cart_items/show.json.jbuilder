json.extract! @cart_item, :menu_item_id, :user_id, :quantity, :id
json.cartItemId @cart_item.id
json.extract! @cart_item.menu_item, :name, :size, :id, :price
json.photoUrl @cart_item.menu_item.photo