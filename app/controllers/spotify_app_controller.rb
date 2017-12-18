# frozen_string_literal: true

class SpotifyAppController < ApplicationController
  layout "spotify_app"

  # def spotify
  #   spotify_user = RSpotify::User.new(request.env['omniauth.auth'])
  #   # spotify_user = RSpotify::User.new(request.env['rack.session'][:ommiauth_spotify_force_approval?])
  #
  #   # Get user's top played artists and tracks
  #   spotify_user.top_tracks(time_range: 'short_term') #=> (Track array)
  #
  #   # Get recommendations
  #   recommendations = RSpotify::Recommendations.generate(seed_tracks: my_fav_tracks.map(&:id))
  #   recommendations.tracks #=> (Track array)
  #
  #   # Check doc for more
  # end

  def index
    @testprops = { name: "Sir" }
  end

end
