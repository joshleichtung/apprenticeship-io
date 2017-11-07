class Apprentice < ApplicationRecord
  validates :first_name, :apprenticeship_company, :email, presence: true
end
