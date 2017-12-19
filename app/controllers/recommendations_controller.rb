class RecommendationsController < ApplicationController
  layout "spotify_app"

  def index
    # spotify_user = RSpotify::User.new(session[:spotify_access_token])
    #
    # recommendations = RSpotify::Recommendations.generate(seed_tracks: params[:seeds_array])

    @recommendations = [
      {
        artist: 'MatadorRails',
        title: 'Sad But True',
        album: 'Metallica'
      },
      {
        artist: 'Breaking Benjamin',
        title: 'Sad But True',
        album: 'Metallica'
      },
      {
        artist: 'Hermes houseband',
        title: 'Sad But True',
        album: 'Metallica'
      },
      {
        artist: 'Lalala',
        title: 'Sad But True',
        album: 'Metallica'
      },
      {
        artist: 'Metallica',
        title: 'Sad But True',
        album: 'Metallica'
      },
      {
        artist: 'Her',
        title: '5 minutes',
        album: ''
      },
      {
        artist: 'Matador',
        title: 'Sad But True',
        album: 'Metallica'
      }
    ]

    render json: @recommendations
  end
end
