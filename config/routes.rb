Rails.application.routes.draw do
  get '/', to: 'spotify_app#index'
  get 'auth/spotify/callback', to: 'users#spotify'

  resources :spotify_app, only: [:index]
  resources :toptracks, defaults: { format: :json}, only: [:index]
  resources :recommendations, defaults: { format: :json}, only: [:index]
  resources :users, defaults: { format: :json}, only: [:index, :spotify]

  get '*path' => redirect('/')

end
