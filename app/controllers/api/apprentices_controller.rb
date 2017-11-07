class Api::ApprenticesController < ApplicationController
  def index
    render json: Apprentice.all
  end
end
