@menu_items.each do |menu_item|
    json.set! menu_item.id do 
        json.extract! menu_item, :id, :name, :description, :price, :ingredients, :size
    end
end
