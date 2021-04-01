json.menu_items do 
    json.set! @menu_item.id do 
        json.extract! menu_item, :id, :name, :description, :price, :ingredients, :size
    end
end