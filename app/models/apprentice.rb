class Apprentice < ApplicationRecord
  validates :first_name, :email, presence: true

  def self.find_or_create_from_auth_hash(auth_hash)
    self.find_or_create_by(uid: auth_hash[:uid]) do |apprentice|
      apprentice.first_name = auth_hash[:info][:first_name]
      apprentice.last_name = auth_hash[:info][:last_name]
      apprentice.email = auth_hash[:info][:email]
      apprentice.description = auth_hash[:info][:description]
      apprentice.location = auth_hash[:info][:location]
      apprentice.linkedin_image_url = auth_hash.extra.raw_info.pictureUrls.values[1][0]
      apprentice.linkedin_url = auth_hash[:info][:urls][:public_profile]
      apprentice.linkedin_token = auth_hash[:credentials][:token]
      apprentice.linkedin_token_expiration = auth_hash[:credentials][:expires_at]
      apprentice.current_company = auth_hash[:extra][:raw_info][:positions][:values][0][:company][:name]
      apprentice.current_title = auth_hash[:extra][:raw_info][:positions][:values][0][:title]
    end
  end

  def to_json(options = {})
    options[:except] ||= [:linkedin_token, :linkedin_token_expiration]
    super(options)
  end
end
