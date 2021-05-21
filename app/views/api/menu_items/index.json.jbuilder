
json.array! @menu_items do |menu_item|
        json.extract! menu_item, :id, :name, :description, :price, :ingredients, :size, :category
        if menu_item.photo.attached?
                json.photo url_for(menu_item.photo)
        else
                json.photo ""
        end
        # json.photoUrl menu_item.photo
end
