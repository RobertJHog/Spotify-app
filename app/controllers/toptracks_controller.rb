class ToptracksController < ApplicationController
  layout "spotify_app"

  def index
    spotify_user = RSpotify::User.new(session[:spotify_access_token])
    # raise spotify_user.inspect

    @top_tracks = spotify_user.top_tracks(time_range: 'short_term') #=> (Track array)

    render json: @top_tracks, status: :ok
  end
end
