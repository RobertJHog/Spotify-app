class ToptracksController < ApplicationController
  layout "spotify_app"

  def index
    # spotify_user = RSpotify::User.new(session[:spotify_access_token])
    # spotify_user = RSpotify::User.new(request.env['omniauth.auth'])
    # # spotify_user = @spotify_user
    #
    # @top_tracks = spotify_user.top_tracks(time_range: 'short_term') #=> (Track array)

    @top_tracks = [
        {
          id: 1,
          artist: 'MetallicaRails',
          title: 'Sad But True',
          album: 'Metallica',
          liked: false
        },
        {
          id: 2,
          artist: 'Her',
          title: '5 minutes',
          album: '',
          liked: false
        },
        {
          id: 3,
          artist: 'Matador',
          title: 'Sad But True',
          album: 'Metallica',
          liked: false
        },
        {
          id: 4,
          artist: 'Breaking Benjamin',
          title: 'Sad But True',
          album: 'Metallica',
          liked: false
        },
        {
          id: 5,
          artist: 'Hermes houseband',
          title: 'Sad But True',
          album: 'Metallica',
          liked: false
        },
        {
          id: 6,
          artist: 'Lalala',
          title: 'Sad But True',
          album: 'Metallica',
          liked: false
        },
        {
          id: 7,
          artist: 'Metallica',
          title: 'Sad But True',
          album: 'Metallica',
          liked: false
        },
        {
          id: 8,
          artist: 'Her',
          title: '5 minutes',
          album: '',
          liked: false
        },
        {
          id: 9,
          artist: 'Matador',
          title: 'Sad But True',
          album: 'Metallica',
          liked: false
        },
        {
          id: 10,
          artist: 'Breaking Benjamin',
          title: 'Sad But True',
          album: 'Metallica',
          liked: false
        },
        {
          id: 11,
          artist: 'Hermes houseband',
          title: 'Sad But True',
          album: 'Metallica',
          liked: false
        },
        {
          id: 12,
          artist: 'Lalala',
          title: 'Sad But True',
          album: 'Metallica',
          liked: false
        }
      ]

    render json: @top_tracks, status: :ok
  end
end
