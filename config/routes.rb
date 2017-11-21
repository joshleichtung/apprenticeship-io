Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :apprentices, only: [:index]
  end

  get '/auth/linkedin/callback', to: 'sessions#apprentice_login'

  root 'pages#home'

  get '*path', to: 'pages#home'
end
