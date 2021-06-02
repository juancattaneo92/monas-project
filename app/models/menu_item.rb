class MenuItem < ApplicationRecord
  validates :name, :description, :price, :ingredients, :category, presence: true

  has_one_attached :photo

  has_one :cart_item,
  primary_key: :id,
  foreign_key: :menu_item_id,
  class_name: :CartItem
end
