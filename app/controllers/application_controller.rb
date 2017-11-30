class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def current_apprentice
    token = Tokenize.decode(cookies[:jwt])
    Apprentice.try(:find_by, {uid: token.first['sub']['uid']})
  end

  def apprentice_logged_in?
    !!current_apprentice
  end
end
