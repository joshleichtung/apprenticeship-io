class SessionsController < ApplicationController
  def apprentice_login
    apprentice = Apprentice.find_or_create_from_auth_hash(auth_hash)
    redirect_to '/hall_of_fame'
  end

  def sign_in
    redirect_to "https://www.linkedin.com/oauth/v2/authorization
?client_id=#{ENV['LINKEDIN_CLIENT_ID']}"
  end

  protected

  def auth_hash
    request.env['omniauth.auth']
  end

  private

  def apprentice_params
    params.require(:apprentice).permit(
      :first_name,
      :last_name,
      :linkedin_image_url,
      :current_title,
      :current_company,
      :apprenticeship_company,
      :email
    )
  end
end
