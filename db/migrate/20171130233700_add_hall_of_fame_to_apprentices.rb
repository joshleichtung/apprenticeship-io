class AddHallOfFameToApprentices < ActiveRecord::Migration[5.1]
  def change
    add_column :apprentices, :hall_of_famer?, :boolean, default: false
  end
end
