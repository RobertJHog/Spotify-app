Rails.application.routes.draw do
  get 'spotify_app', to: 'spotify_app#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'auth/spotify/callback', to: 'spotify_app#index'

  resources :toptracks, defaults: { format: :json}

  # namespace :api do
  #   resources :toptracks, defaults: { format: :json }
  # end
end
