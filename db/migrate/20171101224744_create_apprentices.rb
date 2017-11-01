class CreateApprentices < ActiveRecord::Migration[5.1]
  def change
    create_table :apprentices do |t|
      t.string :first_name
      t.string :last_name
      t.string :linkedin_image_url
      t.string :current_title
      t.string :current_company
      t.string :apprenticeship_company
      t.string :email

      t.timestamps
    end
  end
end
