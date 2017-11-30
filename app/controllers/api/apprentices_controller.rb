class Api::ApprenticesController < ApplicationController
  def index
    render json: Apprentice.all.map(&:details)
  end

  def show
    apprentice = current_apprentice
    if apprentice
      render json: apprentice
    else
      render json: {error: "Error fetching profile"}, status: 422
    end
  end
end
