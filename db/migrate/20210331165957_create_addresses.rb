class CreateAddresses < ActiveRecord::Migration[5.2]
  def change
    create_table :addresses do |t|
      t.string :street, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :apt_num
      t.string :zip_code, null: false
      t.string :user_id, null: false
      t.timestamps
    end
    add_index :addresses, :user_id
  end
end
