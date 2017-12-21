class UsersController < ApplicationController
  layout "spotify_app"

  def spotify
    @spotify_user = RSpotify::User.new(request.env['omniauth.auth'])
    session[:spotify_access_token] = request.env['omniauth.auth']
    redirect_to :controller => 'spotify_app', :action => 'index'
  end

  def index
    spotify_user = RSpotify::User.new(session[:spotify_access_token])
    render json: spotify_user, status: :ok
  end
end
