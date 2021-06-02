class CartItem < ApplicationRecord
    validates :quantity, presence: true

    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :menu_item,
    primary_key: :id,
    foreign_key: :menu_item_id,
    class_name: :MenuItem
end
