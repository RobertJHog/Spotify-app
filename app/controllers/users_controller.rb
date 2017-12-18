class UsersController < ApplicationController

  def spotify
    spotify_user = RSpotify::User.new(request.env['omniauth.auth'])

    session[:spotify_access_token] = request.env['omniauth.auth']
    # spotify_user = RSpotify::User.new(request.env['rack.session'][:ommiauth_spotify_force_approval?])

    # Get user's top played artists and tracks
    # spotify_user.top_tracks(time_range: 'short_term') #=> (Track array)

    # seeds_arrays = params[:seeds_array]

    # Get recommendations
    # recommendations = RSpotify::Recommendations.generate(seed_tracks: my_fav_tracks.map(&:id))
    # recommendations = RSpotify::Recommendations.generate(seed_tracks: seeds_arrays)
    # recommendations.tracks #=> (Track array)
  end
end
