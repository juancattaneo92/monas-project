class Update < ActiveRecord::Migration[5.2]
  def change
    add_column :menu_items, :category, :string
  end
end
