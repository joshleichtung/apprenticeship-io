class Apprenticeship < ApplicationRecord
  validates :company_name, :url, :location, presence: true

  def location
    if self.city || self.state
      [self.city, self.state].join(', ')
    else
      nil
    end
  end
end
