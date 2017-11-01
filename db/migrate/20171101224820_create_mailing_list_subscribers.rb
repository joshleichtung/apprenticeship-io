class CreateMailingListSubscribers < ActiveRecord::Migration[5.1]
  def change
    create_table :mailing_list_subscribers do |t|
      t.string :email

      t.timestamps
    end
  end
end
