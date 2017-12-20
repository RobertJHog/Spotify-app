# frozen_string_literal: true

class SpotifyAppController < ApplicationController
  layout "spotify_app"

  def index
    spotify_user = RSpotify::User.new(request.env['omniauth.auth'])
    session[:spotify_access_token] = request.env['omniauth.auth']
  end

end
