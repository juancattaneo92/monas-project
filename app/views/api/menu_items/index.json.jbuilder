# @menu_items.each do |menu_item|
#     json.set! menu_item.id do 
#         json.extract! menu_item, :id, :name, :description, :price, :ingredients, :size
#     end
# end


# @menu_items.each do |menu_item|
#     json.array! menu_item.id do
#         json.extract! menu_item, :id, :name, :description, :price, :ingredients, :size
#     end
# end

json.array! @menu_items do |menu_item|
        json.extract! menu_item, :id, :name, :description, :price, :ingredients, :size, :category
        json.photoUrl menu_item.photo
end

# [
# {
#    id:
#    name:
#    descriptipm:
#    price:
#    ing:
#    size:
#    category:
# }]