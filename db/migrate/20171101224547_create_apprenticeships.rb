class CreateApprenticeships < ActiveRecord::Migration[5.1]
  def change
    create_table :apprenticeships do |t|
      t.string :url
      t.string :company_name
      t.string :city
      t.string :state
      t.string :description
      t.string :duration
      t.date :start_date

      t.timestamps
    end
  end
end
