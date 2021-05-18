class MenuItem < ApplicationRecord
  validates :name, :description, :price, :ingredients, :category, presence: true

  has_one_attached :photo
end
