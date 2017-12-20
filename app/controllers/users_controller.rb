class UsersController < ApplicationController
  layout "spotify_app"

  def spotify
    spotify_user = RSpotify::User.new(request.env['omniauth.auth'])
    session[:spotify_access_token] = request.env['omniauth.auth']
    @top_tracks = spotify_user.top_tracks(time_range: 'short_term') #=> (Track array)
    redirect_to :controller => 'spotify_app', :action => 'index'
  end
end
