class MailingListSubscriber < ApplicationRecord
  validates :email, presence: true
end
