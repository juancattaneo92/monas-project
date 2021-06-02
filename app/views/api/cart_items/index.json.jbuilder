@cart_items.each do |cart_item|
    json.set! cart_item.id do
        json.quantity cart_item.quantity
        json.menuItemId cart_item.menu_item_id
        json.cartItemId cart_item.id
        json.extract! cart_item.menu_item, :name, :size, :id, :price
        json.photoUrls cart_item.menu_item.photo
    end
end