class CreateMenuItems < ActiveRecord::Migration[5.2]
  def change
    create_table :menu_items do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.string :price, null: false
      t.string :ingredients, null: false
      t.string :size
      t.timestamps
    end
     add_index :menu_items, :name 
  end
end
