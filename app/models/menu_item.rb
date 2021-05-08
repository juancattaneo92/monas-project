class MenuItem < ApplicationRecord
  validates :name, :description, :price, :ingredients, :category, presence: true
end
