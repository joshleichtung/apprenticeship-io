class Api::ApprenticesController < ApplicationController
  def index
    render json: Apprentice.all
  end

  def show
    uid = Tokenize.decode(cookies[:jwt]).first['sub']['uid']
    apprentice = Apprentice.find_by(uid: uid)
    if apprentice
      render json: apprentice
    else
      render json: {error: "Error fetching profile"}, status: 422
    end
  end
end
