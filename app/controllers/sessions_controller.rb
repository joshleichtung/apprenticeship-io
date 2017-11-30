class SessionsController < ApplicationController
  def apprentice_login
    apprentice = Apprentice.find_or_create_from_auth_hash(auth_hash)
    if apprentice.valid?
      token = Tokenize.encode({uid: apprentice.uid})
      cookies[:jwt] = {value: token, httponly: true}
      current_apprentice
      redirect_to "/apprentices/#{apprentice.id}"
    else
      flash[:error] = "Login Failed"
      redirect_to '/apprentice/info'
    end
  end

  def apprentice_logout
    cookies.delete :jwt
    redirect_to '/test'
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
