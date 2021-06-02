class EditCartItem < ActiveRecord::Migration[5.2]
  def change
    remove_column :cart_items, :product_id
    add_column :cart_items, :quantity, :integer, null: false
    add_column :cart_items, :menu_item_id, :integer, null: false
  end
end
