class AddUidToApprentices < ActiveRecord::Migration[5.1]
  def change
    add_column :apprentices, :uid, :string
    add_index :apprentices, :uid
  end
end
