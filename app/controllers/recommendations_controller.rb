class RecommendationsController < ApplicationController
  layout "spotify_app"

  def index
    spotify_user = RSpotify::User.new(session[:spotify_access_token])
    recommendations = RSpotify::Recommendations.generate(seed_tracks: params[:seeds_array])
    render json: recommendations, status: :ok
  end

  def createplaylist
    # Create playlist in user's Spotify account
    playlist = spotify_user.create_playlist!('my-songadvisor-playlist')
  end

  def addtoplaylist
    # Add tracks to a playlist in user's Spotify account
    track = RSpotify::Track.search('Know')
    playlist.add_tracks!(track)
    playlist.tracks.first.name #=> "Somebody That I Used To Know"
  end

end
