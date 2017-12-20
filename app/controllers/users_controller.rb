class UsersController < ApplicationController

  def spotify
    spotify_user = RSpotify::User.new(request.env['omniauth.auth'])
    session[:spotify_access_token] = request.env['omniauth.auth']

    # Get user's top played artists and tracks
    # @top_tracks = spotify_user.top_tracks(time_range: 'short_term') #=> (Track array)
    # render json: @top_tracks, status: :ok

  end
end
