class AddLinkedInDescriptionLocationLinkedInTokenToApprentice < ActiveRecord::Migration[5.1]
  def change
    add_column :apprentices, :linkedin_token, :string
    add_column :apprentices, :linkedin_token_expiration, :datetime
    add_column :apprentices, :linkedin_url, :string
    add_column :apprentices, :location, :string
    add_column :apprentices, :description, :string
  end
end
