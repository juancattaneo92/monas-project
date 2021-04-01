class MenuItem < ApplicationRecord
  validates :name, :description, :price, :ingredients, presence: true
end
